from pathlib import Path
import asyncio,json,os,re,sys,uuid
from datetime import datetime,timezone
from functools import partial
from concurrent.futures import ThreadPoolExecutor
from typing import Literal
from fastapi import FastAPI,HTTPException
from fastapi.responses import Response,JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel,Field,ConfigDict,model_validator
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
app=FastAPI(title='门外 Wi-Fi 调查工作台',version='1.1.0')
EXECUTOR=ThreadPoolExecutor(max_workers=2,thread_name_prefix='wifi-investigation')
@app.exception_handler(RequestValidationError)
async def invalid_request(request,exc):
    # FastAPI's default handler echoes invalid input, which may contain secrets.
    return JSONResponse(status_code=422,content={'detail':[{'loc':list(e['loc']),'type':e['type'],'msg':e['msg']} for e in exc.errors()]})

def sanitize(value):
    """Never persist or return configured credentials, even inside errors."""
    if isinstance(value,dict):return {k:sanitize(v) for k,v in value.items() if k.lower() not in ('api_key','authorization','token','password')}
    if isinstance(value,list):return [sanitize(v) for v in value]
    if isinstance(value,str):
        for name in ('NETAI_API_KEY','OPENAI_API_KEY'):
            secret=os.environ.get(name)
            if secret:value=value.replace(secret,'[REDACTED]')
        return value
    return value

def raw_cases():return json.loads((ROOT/'data/observations.json').read_text(encoding='utf-8-sig'))

@app.get('/health')
async def health():return {'status':'ok','version':app.version,'service':'wifi-investigation','model_configured':bool(os.getenv('NETAI_MODEL'))}
@app.get('/style.css')
async def stylesheet():return await asset('style.css')
@app.get('/app.js')
async def script():return await asset('app.js')
@app.get('/data.js')
async def sample_data():return await asset('data.js')
@app.get('/assets/{name}')
async def asset(name:str):
    if name not in ('app.js','style.css','data.js'):raise HTTPException(404,'资源不存在')
    return Response((ROOT/'frontend'/name).read_bytes(),media_type='text/javascript' if name.endswith('.js') else 'text/css')

class Investigation(BaseModel):
    model_config=ConfigDict(extra='forbid',str_strip_whitespace=True)
    case_id:str=Field(pattern=r'^W\d{2}$')
    question:str|None=Field(default=None,min_length=1,max_length=4000)
    mode:Literal['demo','llm']='demo'
    group:Literal['A','B','C']='C'
    @model_validator(mode='after')
    def demo_group(self):
        if self.mode=='demo' and self.group!='C':raise ValueError('规则演示仅支持C配置，不能冒充A/B对照')
        return self

@app.get('/')
async def index():return Response((ROOT/'frontend/index.html').read_bytes(),media_type='text/html')
@app.get('/cases')
async def cases():return raw_cases()
@app.post('/investigate')
async def investigate(body:Investigation):
    if body.case_id not in {c['id'] for c in raw_cases()['cases']}:raise HTTPException(404,'案例不存在')
    from src.engine import run
    # Standard asyncio executor isolates blocking urllib/model work from event loop.
    try:
        trace=await asyncio.get_running_loop().run_in_executor(EXECUTOR,partial(run,body.case_id,mode='api' if body.mode=='llm' else 'demo',question=body.question,group=body.group))
    except Exception:
        trace={'status':'failed','case_id':body.case_id,'mode':body.mode,'error':'Internal investigation error; inspect local diagnostics'}
    tid=uuid.uuid4().hex
    trace=sanitize({**trace,'trace_id':tid,'created_at':datetime.now(timezone.utc).isoformat()})
    folder=ROOT/'results/web_traces';folder.mkdir(parents=True,exist_ok=True)
    (folder/f'{tid}.json').write_text(json.dumps(trace,ensure_ascii=False,indent=2),encoding='utf8')
    return {'trace_id':tid,'trace':trace}
@app.get('/traces')
async def traces():
    records=[]
    for source in ('codex','web_traces'):
        for p in sorted((ROOT/'results'/source).glob('*.json')):
            if re.fullmatch(r'[A-Za-z0-9_-]{1,80}',p.stem):records.append({'id':f'{source}:{p.stem}','source':'results/'+source,'name':p.name})
    return {'traces':records}
@app.get('/traces/{trace_id}')
async def trace(trace_id:str):
    source,sep,name=trace_id.partition(':')
    if not sep:source,name='web_traces',source
    if source not in ('codex','web_traces') or not re.fullmatch(r'[A-Za-z0-9_-]{1,80}',name):raise HTTPException(400,'无效记录编号')
    base=(ROOT/'results'/source).resolve();p=(base/f'{name}.json').resolve()
    if p.parent!=base:raise HTTPException(400,'无效记录路径')
    if not p.is_file():raise HTTPException(404,'记录不存在')
    try:data=sanitize(json.loads(p.read_text(encoding='utf-8-sig')))
    except (ValueError,OSError):raise HTTPException(500,'记录无法读取')
    return Response(json.dumps(data,ensure_ascii=False),media_type='application/json',headers={'Content-Disposition':f'attachment; filename={name}.json'})
@app.get('/results')
async def results():
    files=[]
    for p in sorted((ROOT/'results').glob('*')):
        if p.is_file() and p.suffix in ('.json','.csv','.md'):files.append({'name':p.name,'content':sanitize(p.read_text(encoding='utf-8-sig'))})
    return {'files':files,'notice':'规则演示与真实模型评测必须分开解释；失败或未运行不等于准确率为零。'}
