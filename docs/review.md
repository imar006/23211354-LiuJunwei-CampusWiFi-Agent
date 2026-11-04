# 楼门外WiFi调查：专业核验与实验审查

2026-11-04。全部Case为人工模拟，不是实际楼门口测量。可运行工具读取模拟快照、核验地址及子网、统计有效探测和比较设备/时间；实际执行工具不等于已经采集现场。

## 一手参考资料与可用引用

1. Droms R. RFC 2131, Dynamic Host Configuration Protocol, 1997, Abstract、§3–4。DHCP负责传递IP配置与地址分配；关联WiFi不保证地址配置正确。<https://datatracker.ietf.org/doc/html/rfc2131>
2. Cheshire S., Aboba B., Guttman E. RFC 3927, Dynamic Configuration of IPv4 Link-Local Addresses, 2005, Abstract、§1。169.254/16仅供同链路通信，不适合跨链路Internet通信。出现此地址支持核查地址获取，但不能单凭它证明DHCP服务器故障。<https://datatracker.ietf.org/doc/html/rfc3927>
3. Mockapetris P. RFC 1034, Domain Names—Concepts and Facilities, 1987, §2、§5。DNS名称解析与IP层/应用连通属于不同检查对象。<https://datatracker.ietf.org/doc/html/rfc1034>
4. Kumari W., Kline E. RFC 8910, Captive-Portal Identification in DHCP and Router Advertisements, 2020, Abstract、§1。客户端即使得到网络配置，也可能必须满足门户条件才能访问Internet；由此可解释“已连WiFi”不等于完成上网授权。<https://www.rfc-editor.org/rfc/rfc8910.html>
5. Braden R. (ed.). RFC 1122, Requirements for Internet Hosts—Communication Layers, 1989, §3.2.2.6。ICMP Echo是独立诊断机制，不能把其失败等同所有TCP/HTTPS不可用。<https://www.rfc-editor.org/rfc/rfc1122.html>。本项目“ICMP失败而HTTPS成功不能判完全断网”首先来自同案直接反证，并非声称RFC保证防火墙一定丢弃ICMP。

上述引用于2026-11-04查阅。报告引用标准解释机制，不猜测校园实际部署了哪种认证协议，也不声称其所有实现均遵守某一个诊断阈值。

## 语义边界

- 同SSID或连接图标是接入线索，不证明地址、网关、DNS、授权、路由和业务目标均正常。认证字段auth指模拟的上网授权状态，不宜混同802.11关联认证。
- W01仅显示DNS测试失败而HTTPS成功。缓存、预解析地址或不同目标均可解释，不能宣称这是数据逻辑矛盾；缺少目标和解析方式，因此结论限于DNS层候选。
- W02识别169.254与无网关合理；不证明DHCP服务器宕机，也可能是租约获取、链路、策略或客户端问题。
- W04 RSSI=-86dBm是弱信号线索，并非跨设备通用故障阈值；没有SNR、重试、频谱证据，不能证明无线干扰或AP故障。
- W06网关探测失败而HTTPS成功，auth required却HTTPS成功，可能因ICMP策略、白名单、过期认证状态或目标差异；conflicting表示证据需复核，并非物理不可能。
- W07 BSSID变化可以是正常AP切换，不证明漫游失败。W08单独ICMP失败不能推翻HTTPS/DNS成功的反证；normal仅限被测目标与时刻。
- W09认证限制与DNS失败可能有因果依赖，mixed表示同时发现多个异常层，不证明两个独立根因。
- W10跨设备、相差3小时，位置变量与设备/时间混杂；即使室外HTTPS确实失败，仍不能归因为位置变化。
- 三次探测统计很小，1/3或3/3不是长期丢包率或可用性估计。null从有效分母剔除，不能当失败；缺失率须另报。

## 评测真实性

tests/protocol.json在模型盲测前固定每案2条语义判据。标签准确率自动计算；证据语义与严重误断言由独立审阅，须引用输出原句及判分理由、SHA256绑定原始输出。没有审阅不能将非空字段当正确证据。tests/evaluate.py可重算B/C工具日志返回并与保存返回比较，但匹配本身只证明与当前模拟工具一致，不证明现场真实性或完整访问历史。

同一数据对A/B/C可见；B不读Skill、C实际读Skill。工具本身含专业规则，因此B并非完全没有专业知识。受试模型上下文不继承父历史；服务端精确版本/采样参数不可见应如实记NA。实验单次、10个人工案例不能给出统计显著性、现实泛化准确率或虚构token/时间。

demo是规则演示，用于验证程序，不计入LLM比较。API不可用也不能用demo顶替。若结果相同，应报告天花板效应；若Skill增加调用但未改进判断，应作为成本限制分析。
