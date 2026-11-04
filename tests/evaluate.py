"""Re-score saved model replies with frozen semantic adjudications; no model calls."""
import argparse,csv,hashlib,json,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
def read(p):return json.loads(Path(p).read_text(encoding='utf-8-sig'))
def main():
    ap=argparse.ArgumentParser();ap.add_argument('output',type=Path);ap.add_argument('--review',type=Path);ap.add_argument('--calls',type=Path);ap.add_argument('--save',type=Path)
    args=ap.parse_args();doc=read(args.output);items=doc if isinstance(doc,list) else doc['cases']
    truth={x['case_id']:x for x in read(ROOT/'data/ground_truth.json')['cases']}
    ids=[x['case_id'] for x in items]
    if len(ids)!=len(set(ids)) or set(ids)!=set(truth):raise ValueError('Require exactly one output per expected case')
    reviews={}
    if args.review:
        review=read(args.review)
        if review['output_sha256']!=hashlib.sha256(args.output.read_bytes()).hexdigest():raise ValueError('Review does not match output bytes')
        rr=review['cases'];reviews={x['case_id']:x for x in rr}
        if len(rr)!=len(reviews) or set(reviews)!=set(truth):raise ValueError('Incomplete or duplicated review')
    rows=[]
    for item in items:
        cid=item['case_id'];c=item.get('conclusion',item)
        label=int(c.get('label') in truth[cid]['acceptable_labels']);r=reviews.get(cid);semantic=overclaim=success=None
        if r:
            rub=r['rubric'];oc=r['overclaim']
            if len(rub)!=2 or any(type(x.get('pass')) is not bool or not x.get('quote') or not x.get('reason') for x in rub):raise ValueError('Each semantic criterion needs boolean, output quote and reason')
            if type(oc.get('present')) is not bool or not oc.get('reason') or (oc['present'] and not oc.get('quote')):raise ValueError('Overclaim needs verdict and evidence')
            # Quotes must actually be present in the conclusion; no fabricated adjudication evidence.
            text=json.dumps(c,ensure_ascii=False)
            for x in rub+[oc]:
                if x.get('quote') and x['quote'] not in text:raise ValueError('Review quote absent from output: '+cid)
            semantic=sum(x['pass'] for x in rub);overclaim=int(oc['present']);success=int(label and semantic==2 and not overclaim)
        rows.append({'case_id':cid,'label_correct':label,'semantic_passes_out_of_2':semantic,'overclaim':overclaim,'task_success':success})
    calls=[];matching=None
    if args.calls:
        d=read(args.calls);calls=d if isinstance(d,list) else d['calls']
        from src.tools import execute
        matching=sum(execute(x.get('name',x.get('tool')),x['arguments'])==x['output'] for x in calls)
    n=len(rows);summary={'n':n,'label_accuracy':sum(r['label_correct'] for r in rows)/n,'semantic_evidence':sum(r['semantic_passes_out_of_2'] for r in rows)/(2*n) if reviews else None,'overclaim_rate':sum(r['overclaim'] for r in rows)/n if reviews else None,'task_success':sum(r['task_success'] for r in rows)/n if reviews else None,'tool_calls':len(calls) if args.calls else None,'tool_returns_recomputed_match':matching,'output_sha256':hashlib.sha256(args.output.read_bytes()).hexdigest()}
    print(json.dumps(summary,ensure_ascii=False,indent=2))
    if args.save:
        args.save.mkdir(parents=True,exist_ok=True)
        (args.save/'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf8')
        with (args.save/'evaluation.csv').open('w',encoding='utf-8-sig',newline='') as f:
            w=csv.DictWriter(f,fieldnames=rows[0]);w.writeheader();w.writerows(rows)
if __name__=='__main__':main()
