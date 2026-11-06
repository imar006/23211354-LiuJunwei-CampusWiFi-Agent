"""Reproduce saved A/B/C scores with the standard library; never call a model."""
import json,subprocess,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def main():
 out=ROOT/'results/reproduced';summaries={}
 for group in 'ABC':
  command=[sys.executable,str(ROOT/'tests/evaluate.py'),str(ROOT/f'results/codex/{group}.json'),'--review',str(ROOT/f'results/report-evaluation/{group}_review.json'),'--save',str(out/group)]
  if group!='A':command+=['--calls',str(ROOT/f'results/codex/{group}_calls.json')]
  subprocess.run(command,cwd=ROOT,check=True)
  actual=read(out/group/'summary.json');expected=read(ROOT/f'results/report-evaluation/{group}/summary.json')
  if actual!=expected:raise AssertionError(f'{group}: reproduced summary differs from saved report baseline: {actual!r} vs {expected!r}')
  summaries[group]=actual
 if summaries!=read(ROOT/'results/report-evaluation/summary.json'):raise AssertionError('Combined report summary differs')
 from src.tools import execute
 calls=read(ROOT/'results/codex/B_calls.json')['calls'];compatible=0
 for call in calls:
  old=json.loads(json.dumps(call['output']));new=execute(call.get('name',call.get('tool')),call['arguments'])
  for obj in (old,new):
   result=obj.get('result',{});result.pop('warnings',None)
   if 'conflicts' in result:result['conflicts']=[s for s in result['conflicts'] if 'invalid/missing samples are not failures' not in s]
  compatible+=old==new
 compatibility={'B_exact_match':summaries['B']['tool_returns_recomputed_match'],'B_total':len(calls),'B_compatible_after_declared_warning_field_normalization':compatible,'normalization':'remove newly added warnings and move missing-sample notices out of conflicts; does not change raw saved logs or numerical stats'}
 if compatibility!=read(ROOT/'results/report-evaluation/version-compatibility.json'):raise AssertionError('B version compatibility differs from report')
 (out/'summary.json').write_text(json.dumps(summaries,ensure_ascii=False,indent=2),encoding='utf8')
 (out/'version-compatibility.json').write_text(json.dumps(compatibility,ensure_ascii=False,indent=2),encoding='utf8')
 print('PASS: all A/B/C scores and output hashes match saved report summaries.')
 print('B: 6/16 exact returns; 16/16 compatible after declared warning-field normalization. Original records were not modified.')
 print('This re-scores saved outputs; it does not reproduce or invoke the original model.')
if __name__=='__main__':main()
