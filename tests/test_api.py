"""API contract tests (in-process HTTP via ASGI; no external model required)."""
import asyncio,json,os,sys,time,unittest
from pathlib import Path
from unittest.mock import patch
import httpx
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from backend.app import app,ROOT as APP_ROOT
class APITests(unittest.IsolatedAsyncioTestCase):
 async def asyncSetUp(self):
  self.client=httpx.AsyncClient(transport=httpx.ASGITransport(app=app),base_url='http://test')
  self.created=[]
 async def asyncTearDown(self):
  await self.client.aclose()
  for tid in self.created:
   (APP_ROOT/'results/web_traces'/f'{tid}.json').unlink(missing_ok=True)
 async def post(self,**kwargs):
  r=await self.client.post('/investigate',json={'case_id':'W01',**kwargs})
  if r.status_code==200:self.created.append(r.json()['trace_id'])
  return r
 async def test_cases_and_static(self):
  r=await self.client.get('/cases');self.assertEqual(r.status_code,200);self.assertEqual(len(r.json()['cases']),10);self.assertNotIn('ground_truth',r.text)
  for path in ['/','/style.css','/app.js','/data.js','/health']:
   self.assertEqual((await self.client.get(path)).status_code,200)
  self.assertEqual((await self.client.get('/assets/secret')).status_code,404)
 async def test_demo_trace_roundtrip(self):
  r=await self.post();self.assertEqual(r.status_code,200);d=r.json();self.assertEqual(d['trace']['status'],'completed');self.assertTrue(d['trace']['calls']);self.assertEqual(d['trace']['trace_id'],d['trace_id']);self.assertTrue(d['trace']['created_at'])
  saved=await self.client.get('/traces/'+d['trace_id']);self.assertEqual(saved.json(),d['trace'])
  listed=(await self.client.get('/traces')).json()['traces'];self.assertTrue(any(x['id']=='web_traces:'+d['trace_id'] for x in listed))
 async def test_schema_and_unknown(self):
  for fields in [{'mode':'bogus'},{'group':'D'},{'group':'A','mode':'demo'},{'question':''},{'api_key':'must-not-be-accepted'}]:
   self.assertEqual((await self.post(**fields)).status_code,422)
  r=await self.post(api_key='SECRET-IN-INVALID-FIELD');self.assertEqual(r.status_code,422);self.assertNotIn('SECRET-IN-INVALID-FIELD',r.text)
  self.assertEqual((await self.post(case_id='W99')).status_code,404)
  self.assertEqual((await self.client.get('/traces/missing')).status_code,404)
  self.assertEqual((await self.client.get('/traces/codex:..')).status_code,400)
 async def test_missing_model_and_secret_redaction(self):
  with patch.dict(os.environ,{'NETAI_MODEL':'','NETAI_API_KEY':'SECRET-TEST-CREDENTIAL'}):
   r=await self.post(mode='llm');self.assertEqual(r.status_code,200);self.assertEqual(r.json()['trace']['status'],'failed');self.assertNotIn('SECRET-TEST-CREDENTIAL',r.text);self.assertEqual(r.json()['trace']['calls'],[])
 async def test_health_remains_responsive_during_blocking_run(self):
  def slow(*args,**kwargs):time.sleep(.3);return {'status':'completed','calls':[]}
  with patch('src.engine.run',slow):
   task=asyncio.create_task(self.post());await asyncio.sleep(.03)
   self.assertFalse(task.done());health=await self.client.get('/health');self.assertEqual(health.status_code,200);self.assertFalse(task.done());await task
if __name__=='__main__':unittest.main()
