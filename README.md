# 校园 Wi-Fi 调查 Agent

为校园网维护人员调查“走出楼门仍连接 Wi-Fi，却无法正常上网”的问题。系统对照室内/室外模拟观测，提出地址、DNS、认证、无线质量和上游策略等假设，调用工具并给出支持证据、反证、不确定性及核验建议。只读分析，不扫描或修改真实设备。

## 1. 模型、Agent、Tool 与 Skill

实际 A/B/C 实验使用 Codex 协作环境的继承默认模型，原始记录标注 `codex-collaboration`。精确模型 ID、温度、Token 和后端版本不可得，不能保证未来逐字复现。A 直接推理；B 可使用工具；C 另加载专业 Skill。实验不是当前网页每次点击都会发生的模型调用。

程序使用自主实现的轻量 Python Agent（`src/engine.py`），不依赖 CrewAI/PydanticAI。四个真实工具位于 `src/tools.py`：`get_snapshot` 读取快照、`check_ip_config` 检查地址及网关、`analyze_connectivity` 统计有效探测与跨层冲突、`compare_snapshots` 检查设备/时间可比性。专业工作步骤保存于 `skills/wifi-investigation/SKILL.md`，C组实际加载并记录其哈希。

三种模式须区分：规则 demo 实际执行确定性工具；在线 llm 使用服务端配置的 OpenAI 兼容模型；saved 仅回放先前保存的 Codex 记录。缺模型或上游失败会记录 failed，不回退规则并伪称模型结果。直接双击 `frontend/index.html` 是独立前端样例回放。

## 2. 环境安装

Windows用户请先完整解压ZIP，再双击根目录 `启动MVP.cmd` 或 `WiFiMVP.exe`。随包Windows x64免安装程序自带Python和依赖，不需要安装Python、Codex或联网下载依赖。不要只转发EXE：数据、前端、Skill和历史记录仍需保持目录结构。启动后会打开浏览器；保持控制台窗口打开。规则调查及历史回放可离线使用，在线LLM模式仍需配置自己的模型服务。端口被其他程序占用时会尝试相邻端口，具体地址见窗口。启动失败会保留提示并写startup.log。

源码启动：`start.ps1`优先使用免安装EXE；没有EXE时寻找可运行的Python3.10+，再由launch.py创建环境并联网安装依赖。复制自其他电脑的`.venv`不可移植：启动器会验证解释器，失效环境由launch.py保留为`.venv.invalid-*`后重建。不要将`.venv`、失效环境备份和缓存再次压缩。

不安装依赖只想看前端样例，可双击 `frontend/index.html`，这是本地回放，不会调用后端或在线模型。


所有命令在解压后的项目根目录运行，即 README.md 所在目录，不需要额外进入 wifi_course 子目录。实际验证 Python 3.12；Windows PowerShell：

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

主要依赖精确锁定：FastAPI 0.162.0、Uvicorn 0.54.0、HTTPX 0.28.1、Pydantic 2.14.2、Starlette 1.10.0。原生 HTML/CSS/JS 前端无需 Node 或构建。报告生成所需文档工具不是运行本系统的前置依赖。

## 3. 配置在线模型

`.env.example` 仅提供变量模板，应用不会自动读取 `.env`。在启动服务的同一个 PowerShell 中配置：

```powershell
$env:NETAI_BASE_URL='http://localhost:11434/v1'
$env:NETAI_MODEL='填写实际已部署且支持工具调用的模型名称'
# 若服务需要认证，在本机设置 NETAI_API_KEY；不要提交密钥。
```

`NETAI_BASE_URL` 是兼容接口的 /v1 根地址，`NETAI_MODEL` 必须与实际服务一致，`NETAI_API_KEY` 仅在服务端读取。示例不代表本机已安装某个模型，也不能用另一模型的新结果替换本次历史实验。服务过滤已配置凭据，前端不接收密钥，且不使用 localStorage 保存模型配置。

## 4. 启动与完整调查

```powershell
python -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
# 或 .\start.ps1
```

打开 [本地工作台](http://127.0.0.1:8765)。选择 W01 和“规则演示”，点击“开始调查”，检查实际工具 JSON、来源引用、结论与反证，再导出 Trace。选择“查看真实实验记录”及 A/B/C 可浏览历史实验；B/C会合并对应工具日志。网页明确标注历史查看不产生本次新模型调用。

接口文档位于 `/docs`；`GET /health` 检查服务状态；`GET /cases` 只返回观测不返回答案；`POST /investigate` 接受 case_id/question/mode/group；`GET /traces` 列表及 `/traces/{id}` 下载；`GET /results` 查看汇总。mode=demo/llm，group=A/B/C；demo仅C。参数不合法422、未知案例/记录404、不安全Trace编号400。200仅表示调查请求已处理：还须检查 `trace.status` 是否 completed。每次API调查保存 trace_id 与UTC created_at。阻塞模型调用运行在独立执行器中。

## 5. 测试与10案规则演示

```powershell
python -m unittest discover -s tests -p "test_*.py" -v
```

现有21项自动测试涵盖地址合法性、null样本分母、冲突与ICMP/HTTPS区分、可比性、来源引用、错误参数、模型失败与工具预算，以及HTTP接口、Trace往返、秘密脱敏和健康接口并发响应。

下面在不调用模型的前提下依次运行10案，并打印实际状态与暂定标签：

```powershell
python -c "import json; from src.engine import run; d=json.load(open('data/observations.json',encoding='utf-8')); ts=[run(c['id'],mode='demo') for c in d['cases']]; print(*[(t['case_id'],t['status'],t.get('conclusion',{}).get('label')) for t in ts],sep='\n')"
```

`data/observations.json` 为明确模拟数据；`data/ground_truth.json` 是评分依据，运行Agent不读取它。规则演示只验证软件链路，不能拿其分数当作A/B/C模型成绩。

## 6. 复算历史 A/B/C 评测

```powershell
python tests/reproduce_evaluation.py
```

此命令仅使用标准库，逐组运行 `tests/evaluate.py`，读取原始输出 `results/codex/{A,B,C}.json`、逐案语义审阅 `results/report-evaluation/{A,B,C}_review.json`，并重算 B/C 的工具日志。输出写入 `results/reproduced/A`、`B`、`C` 及总汇总；自动检查全部分数和原始输出 SHA256 与报告基线相同，不改写原始数据、不调用任何模型。发现差异直接报错，不偷偷重建审阅文件。

单组命令示例：

```powershell
python tests/evaluate.py results/codex/C.json --review results/report-evaluation/C_review.json --calls results/codex/C_calls.json --save results/reproduced/C
```

评测协议见 `tests/protocol.json`。标签准确率、两条逐案语义判据通过率、严重过度断言率和任务成功率均有预定义规则；审阅引用须出现在原输出，审阅还与输出哈希绑定。A/B/C标签均100%；语义证据分别100%、100%、95%；任务成功分别100%、100%、90%。C的W10虽标签正确，却遗漏原始室外HTTPS失败症状，保留为失败案例。结果不支持宣称Skill在这10案上提高成功率。

B工具历史16条仅6条与当前版本精确匹配：当前 `analyze_connectivity` 新增 warnings，并把缺失样本提示从 conflicts 移出；统计数值及真正跨层冲突不变。仅按已声明规则规范化后16/16兼容，C则10/10精确匹配。脚本另行检查此兼容结论；不覆盖旧日志。B/C工具版本不完全一致，是对照实验混杂限制，6/16不能解释为10次调用错误。

## 7. 提交文件与组织

根目录提供 `report.pdf`、本README、`requirements.txt`、`.env.example`。`src/` 是Agent与Tool，`backend/` 是FastAPI入口，`frontend/` 是原生界面与本地样例；`skills/` 为专业Skill，`data/` 为模拟观测和隔离答案；`tests/` 为测试、协议及评分程序；`results/codex/` 为原始模型输出与Tool日志，`results/report-evaluation/` 为审阅及报告评分基线；`docs/` 为架构、工作流程、截图和来源记录。ZIP中应包含报告、完整源码与实验记录。不要提交 .runtime、.venv、API Key 或运行期间临时日志。

## 8. 已知限制与 AI 辅助说明

本项目不接管真实校园网，不承诺定位楼门口现场根因。10案人为构造、每组单次，易出现天花板效应，不能推断显著性或真实网络泛化；正常仅限给定目标与时刻。Codex精确模型版本不可锁定、人工审阅非完全盲评、B/C工具存在版本差异。复算保存输出能重现评分，不能等同于重新运行同一服务端模型。Wi-Fi关联不等于授权完成，BSSID变化不证明漫游失败，单次ICMP失败不证明完全断网，低RSSI不能证明干扰，缺失不能当失败样本。

AI协助生成了设计、代码、模拟案例和文稿；实际运行、错误修复及证据审阅另有记录。提交者仍需理解每个工具、核验原始输出与评分，并据实说明个人贡献。后续真实模型测试必须另存新批次，保留失败与版本信息，不能回改本次实验。

## 提交材料

仓库：[23211354-LiuJunwei-CampusWiFi-Agent](https://github.com/imar006/23211354-LiuJunwei-CampusWiFi-Agent)。正式报告位于根目录 `report.pdf`；设计文档、运行截图及可编辑报告位于 `docs/`；原始实验、评分依据与汇总位于 `results/`。

评分证据索引见[需求与验收矩阵](docs/requirements-matrix.md)；AI辅助范围、代表性修改与两人各50%的责任安排见[AI辅助与小组分工](docs/AI辅助与小组分工.md)。

## Windows免安装程序构建

在Windows x64、Python3.12环境安装运行依赖和 `pyinstaller==6.22.3` 后，在根目录运行：

```powershell
python -m PyInstaller --noconfirm --clean --onefile --name WiFiMVP --collect-all uvicorn --hidden-import backend.app --hidden-import src.engine --hidden-import src.tools portable_entry.py
```

将 `dist/WiFiMVP.exe` 放到项目根目录。EXE包含程序和依赖；前端、模拟数据、Skill、原始实验记录由项目根目录读取。完整源码保留可供检查和重新构建。
