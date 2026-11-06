import unittest
import io,json,os
from unittest.mock import patch
from src.tools import check_ip_config,analyze_connectivity,compare_snapshots,execute
from src.engine import run,validate_conclusion

class ToolsTest(unittest.TestCase):
    def test_link_local(self):
        x=check_ip_config('W02');self.assertTrue(x['format_valid']);self.assertFalse(x['usable'])
    def test_missing_is_unknown(self):
        self.assertIsNone(check_ip_config('W05')['usable'])
        self.assertEqual(analyze_connectivity('W05')['stats']['dns']['valid'],0)
        self.assertIsNone(analyze_connectivity('W05')['stats']['dns']['success_ratio'])
    def test_valid_denominator(self):
        x=analyze_connectivity('W02')['stats']['gateway'];self.assertEqual(x['valid'],2);self.assertAlmostEqual(x['valid_ratio'],2/3)
    def test_conflict(self):self.assertTrue(analyze_connectivity('W06')['conflicts'])
    def test_icmp_does_not_cancel_https(self):
        s=analyze_connectivity('W08')['stats'];self.assertEqual(s['icmp']['success_ratio'],0);self.assertEqual(s['https']['success_ratio'],1)
    def test_uncomparable(self):
        x=compare_snapshots('W10');self.assertFalse(x['same_device']);self.assertFalse(x['comparable']);self.assertEqual(x['seconds_apart'],10800)
    def test_errors(self):
        self.assertFalse(execute('bad',{})['ok']);self.assertFalse(execute('get_snapshot',{'case_id':'unknown'})['ok'])
    def test_trace_sources(self):
        t=run('W01');self.assertEqual(t['status'],'completed');validate_conclusion(t['conclusion'],t['calls'])
        t['conclusion']['evidence'][0]['source_ids']=['fabricated']
        with self.assertRaises(ValueError):validate_conclusion(t['conclusion'],t['calls'])

class RegressionTest(unittest.TestCase):
    def test_partial_samples_not_conflicts(self):
        for case,label in [('W02','ip_config'),('W04','wireless_uncertain')]:
            with self.subTest(case=case):
                checks=analyze_connectivity(case)
                self.assertFalse(checks['conflicts'])
                self.assertTrue(checks['warnings'])
                trace=run(case)
                self.assertEqual(trace['status'],'completed')
                self.assertEqual(trace['conclusion']['label'],label)

    def test_missing_and_incomparable_do_not_invent_causes(self):
        for case in ('W05','W10'):
            self.assertEqual(run(case)['conclusion']['label'],'insufficient')

    def test_parameters_are_strict(self):
        for args in (None,[],{'case_id':['W01']},{'case_id':'W01','location':'roof'},{'case_id':'W01','expected':'dns'}):
            with self.subTest(args=args):self.assertFalse(execute('get_snapshot',args)['ok'])
        self.assertFalse(execute('__import__',{'case_id':'W01'})['ok'])

    def test_unknown_case_is_failed_trace(self):
        t=run('not-a-case')
        self.assertEqual(t['status'],'failed');self.assertNotIn('conclusion',t)
        self.assertNotIn('ground_truth',json.dumps(t))

    def test_no_model_is_explicit_failure(self):
        with patch.dict(os.environ,{},clear=True):
            t=run('W01',mode='api')
        self.assertEqual(t['status'],'failed');self.assertNotIn('conclusion',t)

    def mock_response(self,message):
        return io.BytesIO(json.dumps({'choices':[{'message':message}]}).encode())

    def test_mock_api_rejects_cross_case_and_nonobject(self):
        # Mocked transport only; not an actual model experiment.
        msg={'role':'assistant','tool_calls':[
            {'id':'x','function':{'name':'get_snapshot','arguments':'{"case_id":"W02"}'}},
            {'id':'y','function':{'name':'get_snapshot','arguments':'[]'}}]}
        with patch.dict(os.environ,{'NETAI_MODEL':'mock-model'}),patch('src.engine.urllib.request.urlopen',side_effect=lambda *a,**kw:self.mock_response(msg)):
            t=run('W01',mode='api')
        self.assertEqual(t['status'],'failed')
        self.assertTrue(t['calls']);self.assertLessEqual(len(t['calls']),20)
        self.assertTrue(all(not c['output']['ok'] for c in t['calls']))

    def test_mock_api_total_call_budget(self):
        calls=[{'id':str(i),'function':{'name':'get_snapshot','arguments':'{"case_id":"W01"}'}} for i in range(25)]
        with patch.dict(os.environ,{'NETAI_MODEL':'mock-model'}),patch('src.engine.urllib.request.urlopen',side_effect=lambda *a,**kw:self.mock_response({'role':'assistant','tool_calls':calls})):
            t=run('W01',mode='api')
        self.assertEqual(t['status'],'failed');self.assertEqual(len(t['calls']),20)
        self.assertIn('budget',t['error'])

    def test_mock_timeout_no_fabricated_conclusion(self):
        with patch.dict(os.environ,{'NETAI_MODEL':'mock-model'}),patch('src.engine.urllib.request.urlopen',side_effect=TimeoutError('mock timeout')):
            t=run('W01',mode='api')
        self.assertEqual(t['status'],'failed');self.assertNotIn('conclusion',t)

if __name__=='__main__':unittest.main()

