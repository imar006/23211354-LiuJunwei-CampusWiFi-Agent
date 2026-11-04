# 楼门外 Wi-Fi 无法上网：证据调查 Agent

这是只读课程实验，使用明确构造的室内/门外网络观测，对地址、DNS、认证、无线问题提出假设，调用检查工具，输出支持证据、反证、限制和下一步建议。

## 环境与启动

本机依赖已就绪时，可直接双击根目录的 **启动MVP.cmd**。该入口不需要运行 PowerShell 脚本，也不修改执行策略。服务启动后访问 http://127.0.0.1:8765，并保持启动窗口运行。新电脑或新克隆的仓库请先按下面步骤安装依赖。

实际验证环境：Python 3.12，依赖版本锁定于 requirements.txt。Windows PowerShell：

```powershell
cd wifi_course
python -m venv .venv

.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
```

打开 http://127.0.0.1:8765。已有课程准备环境 `.runtime` 时可执行 `./start.ps1`（需可用 python）。前端是原生HTML/CSS/JS，无Node构建步骤。仅监听本机，不发布网站。

## 三种使用情形

1. 网页默认“规则演示”，运行确定性工具调查链，明确不调用LLM。不得将其分数称作AI模型实验结果。
2. “在线模型”使用服务端OpenAI兼容接口；将 `.env.example` 中变量设置到环境。应用不会自动读取.env文件；PowerShell用 `$env:NETAI_MODEL='模型名称'` 等赋值。需支持tool_calls的模型。配置缺失或请求失败会保存failed记录，不回退规则模式。A/B/C选择分别为直接模型、工具、工具+Skill。
3. “实验记录”可查看 results/codex 下的预存真实实验JSON。页面明确标记为预存记录，点击不产生新的模型调用。原始模型运行条件须以实验配置和记录说明为准。

## 接口与目录

GET /cases仅返回data/observations.json，绝不返回ground_truth。POST /investigate接受case_id、question、mode、group。GET /traces列出记录，GET /traces/{id}下载JSON，GET /results读取结果汇总。非法记录路径拒绝访问。FastAPI接口文档见 /docs。

src/为Agent与实际检查工具，skills/保存专业调查步骤，data/observations.json为模拟原始观测，data/ground_truth.json为隔离评分依据，frontend/为界面，backend/app.py为入口。results/web_traces保存每次网页执行；results/codex保存独立实验记录。前端不接收API Key，不在localStorage中存储配置。

## 复现与边界

测试案例见data/observations.json；评测命令以tests/目录及对应协议为准。运行规则演示与真实模型评测必须分开。工具执行内容可以在网页逐条展开，导出Trace保留原始JSON。合成快照只能检验给定场景的推断，不证明真实校园根因；ICMP失败不等于互联网不可用，无线信号变化与认证状态须结合协议证据。不会扫描或修改任何网络设备。

AI参与了代码、案例和文稿生成；学生应理解工具判断条件，检查原始Trace和评测方法，并据实补充个人贡献。

## 第一阶段 FastAPI MVP（新工作目录）

唯一继续开发目录为 `C:/Users/imar/Desktop/AI_net_work/wifi_course`。可双击 `frontend/index.html` 独立预览；连接后端请运行上述uvicorn命令并打开HTTP地址，页面会自动采用API。NS主页式前端无需构建或重新设计。

健康检查：`GET /health`，只返回服务状态和模型是否配置，不回显密钥。`POST /investigate` 的mode枚举为demo/llm，group为A/B/C，规则演示仅允许C；case_id必须是W加两位数字，question若提供须为1至4000字符。未知字段会被拒绝。引擎在独立标准线程执行，不阻塞异步事件循环。

HTTP状态约定：200表示请求已执行并保存Trace；模型未配置、上游失败等业务执行失败仍返回200，但 `trace.status=failed`，没有规则回退。422表示参数或组合不合法；404表示案例、记录或静态资源不存在；400表示Trace编号不安全；500表示本地记录损坏。每次调查Trace保存trace_id与UTC的created_at，返回的trace与下载记录一致。记录只允许读取results/codex或results/web_traces下白名单名称，拒绝路径穿越。

模型配置只在启动服务的同一个终端设置，例如 `$env:NETAI_MODEL='已安装的实际模型名'`。 `.env.example` 是变量说明模板，复制为.env不会自动加载。服务会过滤已配置凭据及敏感字段；不要把密钥写进源码、问题或提交材料。

API自动测试：

```powershell
python -m unittest discover -s tests -p test_api.py -v
```

测试通过HTTP ASGI调用校验10个案例、静态资源、demo完整调查、Trace往返、422/404/400、缺模型的失败记录与并发健康检查；不调用付费模型。程序生成的测试Trace会在测试结束清理。真实浏览器HTTP验证与前端截图以本阶段验证记录为准。

