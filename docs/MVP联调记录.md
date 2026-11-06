# 第一阶段 MVP 联调记录

日期：2026年11月4日。工作目录：AI_net_work/wifi_course。

## 验证环境

Python 3.12；FastAPI 0.162.0；Uvicorn 0.54.0；Microsoft Edge（Playwright驱动）。后端实际监听127.0.0.1:8765，health版本1.1.0。没有配置真实在线模型。

## 实际结果

- 21项自动测试通过：16项工具/核心回归和5项API合同测试，包含异步健康检查响应。
- 浏览器通过HTTP访问主页，成功载入10个案例；未进入独立前端fallback。
- 点击开始调查真实发出POST /investigate，返回completed、新trace_id、created_at及4条工具记录。
- 保存Trace可通过GET再读，浏览器导出的JSON与本次调查对应。
- 10个模拟案例逐一经HTTP完成实际规则调查；W02得到ip_config、W04得到wireless_uncertain，缺失样本不再被误当冲突。
- 记录导航可读；不存在的案例返回404，非法mode返回422。
- 在线模型缺配置时产生failed记录，无虚构结论、无规则回退。
- 浏览器检查无页面JavaScript异常。

以上是工程与规则演示验收，不是LLM性能评测。API超时等单元测试使用mock，不代表实际模型服务已经验证。

## 可复核材料

integration/verification.json：真实浏览器与HTTP检查摘要。  
integration/web-trace-W01.json：本次页面返回。  
integration/browser-export.json：实际浏览器下载内容。  
integration/01-live-investigation.png：后端实时执行后的界面。  
integration/02-saved-records.png：记录页。  
integration/03-model-not-configured.png：无模型配置的失败提示。

## 复现

按README安装并启动，然后运行python -m unittest discover -s tests -p test_*.py。浏览器访问本机8765端口，选择W01并开始调查。tests/browser_integration.cjs为本次自动化操作记录，另需Playwright及Edge；日常使用不需要Node。
