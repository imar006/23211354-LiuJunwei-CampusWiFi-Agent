import ipaddress
import json
from pathlib import Path
from datetime import datetime
ROOT=Path(__file__).resolve().parents[1]

def cases():
    return json.loads((ROOT/'data/observations.json').read_text(encoding='utf8'))['cases']

def get_case(case_id):
    for c in cases():
        if c['id']==case_id:return c
    raise ValueError('Unknown case_id')

def get_snapshot(case_id,location='outdoor'):
    if location not in ('indoor','outdoor'):raise ValueError('Invalid location')
    return {'synthetic':True,'case_id':case_id,'location':location,'snapshot':get_case(case_id)['snapshots'].get(location)}

def check_ip_config(case_id,location='outdoor'):
    s=get_snapshot(case_id,location)['snapshot'] or {}
    result={'format_valid':None,'usable':None,'same_subnet':None,'issues':[]}
    if s.get('ip') is None or s.get('prefix') is None:
        result['issues'].append('Missing address or prefix');return result
    try:
        if isinstance(s['prefix'],bool):raise ValueError('Boolean prefix')
        iface=ipaddress.ip_interface(str(s['ip'])+'/'+str(s['prefix']))
        addr=iface.ip
        result.update(format_valid=True,address_class='link_local' if addr.is_link_local else 'private' if addr.is_private else 'global',usable=not(addr.is_unspecified or addr.is_multicast or addr.is_loopback or addr.is_link_local))
        if not result['usable']:result['issues'].append('Address unsuitable for ordinary campus Internet access')
        if s.get('gateway') is None:result['issues'].append('Missing gateway');return result
        gw=ipaddress.ip_address(s['gateway']);result['same_subnet']=gw in iface.network
        if not result['same_subnet']:result['issues'].append('Gateway outside subnet; special on-link routes may be intentional')
    except ValueError as exc:
        result.update(format_valid=False,usable=False);result['issues'].append(str(exc))
    return result

def analyze_connectivity(case_id,location='outdoor'):
    s=get_snapshot(case_id,location)['snapshot'] or {};stats={};conflicts=[];warnings=[]
    for name in ('gateway','https','dns','icmp'):
        values=(s.get('checks') or {}).get(name) or []
        valid=[v for v in values if type(v) is bool]
        stats[name]={'successes':sum(valid),'valid':len(valid),'total':len(values),'success_ratio':sum(valid)/len(valid) if valid else None,'valid_ratio':len(valid)/len(values) if values else None}
        if len(valid)!=len(values):warnings.append(name+': invalid/missing samples are not failures')
    if stats['https']['successes'] and stats['gateway']['valid'] and not stats['gateway']['successes']:conflicts.append('HTTPS works while gateway checks fail; ICMP policy or target limitation possible')
    if s.get('auth')=='required' and stats['https']['successes']:conflicts.append('Authentication required but HTTPS succeeds; walled garden or stale state possible')
    return {'stats':stats,'auth':s.get('auth'),'conflicts':conflicts,'warnings':warnings,'limitation':'Recorded checks only, not live probes; single target and ICMP failure cannot establish total outage.'}

def compare_snapshots(case_id):
    snapshots=get_case(case_id)['snapshots'];a=snapshots.get('indoor') or {};b=snapshots.get('outdoor') or {};limitations=[]
    same=a.get('device_id')==b.get('device_id') if a.get('device_id') and b.get('device_id') else None
    try:seconds=abs((datetime.fromisoformat(a['time'])-datetime.fromisoformat(b['time'])).total_seconds())
    except (ValueError,KeyError,TypeError):seconds=None
    if same is not True:limitations.append('Different or unknown device')
    if seconds is None or seconds>300:limitations.append('Missing timestamps or >300s gap; temporal confounding')
    changes={k:{'indoor':a.get(k),'outdoor':b.get(k)} for k in ('ssid','bssid','rssi_dbm','ip','gateway','dns','auth') if a.get(k)!=b.get(k)}
    return {'same_device':same,'seconds_apart':seconds,'comparable':same is True and seconds is not None and seconds<=300,'changes':changes,'limitations':limitations+['BSSID change alone does not prove roaming failure; signal alone cannot prove interference.']}

FUNCTIONS={f.__name__:f for f in (get_snapshot,check_ip_config,analyze_connectivity,compare_snapshots)}
def execute(name,arguments):
    try:
        if not isinstance(name,str) or name not in FUNCTIONS:raise ValueError('Unknown tool')
        if not isinstance(arguments,dict):raise ValueError('Arguments must be an object')
        allowed={'case_id'} if name=='compare_snapshots' else {'case_id','location'}
        if set(arguments)-allowed:raise ValueError('Unexpected tool arguments')
        if not isinstance(arguments.get('case_id'),str):raise ValueError('case_id must be a string')
        if arguments.get('location','outdoor') not in ('indoor','outdoor'):raise ValueError('Invalid location')
        return {'ok':True,'result':FUNCTIONS[name](**arguments)}
    except (KeyError,ValueError,TypeError,OSError) as e:return {'ok':False,'error':type(e).__name__+': '+str(e)}
SCHEMAS=[{'type':'function','function':{'name':name,'description':name+' on synthetic observations only','parameters':{'type':'object','properties':{'case_id':{'type':'string'},**({'location':{'type':'string','enum':['indoor','outdoor']}} if name!='compare_snapshots' else {})},'required':['case_id'],'additionalProperties':False}}} for name in FUNCTIONS]
