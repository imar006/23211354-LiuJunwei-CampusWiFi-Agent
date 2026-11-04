"""Manual Codex message bridge; no hidden automatic model execution."""
import argparse,json,hashlib
from .tools import ROOT,get_case,execute,SCHEMAS
from .engine import SYSTEM,validate_conclusion

def directory(case_id,group):
    get_case(case_id)
    if group not in 'ABC' or len(group)!=1 or not case_id.isalnum():raise ValueError('Invalid case/group')
    d=ROOT/'results/bridge'/group/case_id;d.mkdir(parents=True,exist_ok=True);return d

def record(d,event):
    with (d/'events.jsonl').open('a',encoding='utf8') as f:f.write(json.dumps(event,ensure_ascii=False)+'\n')
    return event

def prepare(case_id,group):
    d=directory(case_id,group);skill=(ROOT/'skills/wifi-investigation/SKILL.md').read_text(encoding='utf8') if group=='C' else ''
    e={'event':'prepare','case_id':case_id,'group':group,'backend':'manual_codex_bridge','model_id':'not exposed','prompt':SYSTEM+('\n'+skill if skill else '')+('\nA: no analysis tools. Cite observation:indoor/outdoor.' if group=='A' else '\nUse tools autonomously; do not read ground_truth, other outputs or previous runs.'),'observation':get_case(case_id),'tools':SCHEMAS if group!='A' else [],'skill_sha256':hashlib.sha256(skill.encode()).hexdigest() if skill else None}
    (d/'prompt.json').write_text(json.dumps(e,ensure_ascii=False,indent=2),encoding='utf8');return record(d,e)

def tool(case_id,group,name,args):
    d=directory(case_id,group)
    if not (d/'prompt.json').exists():raise ValueError('Run prepare first')
    logs=[json.loads(l) for l in (d/'events.jsonl').read_text(encoding='utf8').splitlines()]
    output={'ok':False,'error':'Group, tool, or case access denied'}
    if group!='A' and name in {s['function']['name'] for s in SCHEMAS} and isinstance(args,dict) and args.get('case_id')==case_id:output=execute(name,args)
    return record(d,{'event':'tool','id':'call_'+str(1+sum(e['event']=='tool' for e in logs)),'name':name,'arguments':args,'output':output})

def final(case_id,group,path):
    d=directory(case_id,group);logs=[json.loads(l) for l in (d/'events.jsonl').read_text(encoding='utf8').splitlines()];value=json.loads(path.read_text(encoding='utf8'))
    calls=[e for e in logs if e['event']=='tool'] if group!='A' else [{'id':'observation:'+loc,'output':{'ok':True}} for loc in ('indoor','outdoor')]
    validate_conclusion(value,calls);return record(d,{'event':'final','conclusion':value,'validation':'structure and source existence only'})

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('command',choices=['prepare','tool','final']);p.add_argument('case');p.add_argument('group');p.add_argument('extra',nargs='*');a=p.parse_args()
    from pathlib import Path
    if a.command=='prepare':r=prepare(a.case,a.group)
    elif a.command=='tool':r=tool(a.case,a.group,a.extra[0],json.loads(a.extra[1]))
    else:r=final(a.case,a.group,Path(a.extra[0]))
    print(json.dumps(r,ensure_ascii=False,indent=2))
