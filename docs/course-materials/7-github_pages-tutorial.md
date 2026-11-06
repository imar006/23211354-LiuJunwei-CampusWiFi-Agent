# GitHub Pages 一页版教程：把 HTML 页面发布到外网

本教程适合零基础同学，用于把自己的 `HTML + CSS + JS` 小项目发布到 GitHub Pages，得到一个可以外网访问的网址。

GitHub Pages 是 GitHub 提供的静态网站托管服务，可以直接托管仓库里的 HTML、CSS、JavaScript 文件。([docs.github.com](https://docs.github.com/en/enterprise-cloud%40latest/pages/getting-started-with-github-pages/what-is-github-pages?utm_source=chatgpt.com))

---

## 一、你要准备什么

最少准备这 3 个文件：

```text
index.html
style.css
script.js
```

其中最重要的是：

```text
index.html
```

因为它通常是网站首页入口文件。

---

## 二、创建仓库

登录 GitHub 后：

1. 点击右上角 **New repository**
2. 输入仓库名

你有两种选择：

### 方式 1：个人主页站点
仓库名写成：

```text
你的用户名.github.io
```

例如：

```text
yishuai.github.io
```

这样发布后，网址通常就是：

```text
https://你的用户名.github.io/
```

GitHub 官方快速入门就是这种方式。([docs.github.com](https://docs.github.com/pages/quickstart?utm_source=chatgpt.com))

### 方式 2：项目主页站点
如果仓库名写成：

```text
my-course-page
```

发布后网址通常就是：

```text
https://你的用户名.github.io/my-course-page/
```

GitHub Pages 也支持在普通项目仓库中创建站点。([docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site?utm_source=chatgpt.com))

---

## 三、上传文件

进入仓库后：

1. 点击 **Add file**
2. 选择 **Upload files**
3. 上传你的：
   - `index.html`
   - `style.css`
   - `script.js`
4. 点击 **Commit changes**

GitHub 官方文档说明可以通过 **Add file → Upload files** 上传文件。([docs.github.com](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository?utm_source=chatgpt.com))

---

## 四、设置 GitHub Pages

进入仓库后：

1. 点击 **Settings**
2. 左侧点击 **Pages**
3. 在 **Build and deployment** 里找到发布设置
4. 选择：

- **Source**：`Deploy from a branch`
- **Branch**：`main`
- **Folder**：`/(root)`

5. 点击 **Save**

GitHub Pages 支持从某个分支和文件夹作为发布源。([docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site?utm_source=chatgpt.com))

---

## 五、等待发布完成

保存后，稍等一会儿，GitHub 会生成站点地址。

### 如果你的仓库名是：
```text
你的用户名.github.io
```

网址通常是：

```text
https://你的用户名.github.io/
```

### 如果你的仓库名是普通项目名：
```text
my-course-page
```

网址通常是：

```text
https://你的用户名.github.io/my-course-page/
```

---

## 六、文件之间如何连接

你的 `index.html` 里通常需要这样写：

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

这样页面才能正确加载样式和脚本。

---

## 七、最简单的目录结构

```text
your-repo/
├─ index.html
├─ style.css
└─ script.js
```

---

## 八、常见问题

### 1. 页面打不开
请检查：

- 是否已经开启 **Pages**
- 是否选择了 `main` 分支
- 是否选择了 `/(root)`
- 是否有 `index.html`
- 是否等了几分钟

这些都和 GitHub Pages 的发布源设置有关。([docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site?utm_source=chatgpt.com))

### 2. CSS 或 JS 没生效
请检查：

- 文件名是否写对
- 大小写是否一致
- 路径是否写错

例如应写成：

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

### 3. 外网访问不到
请检查仓库是否是 **Public**。GitHub 文档说明，GitHub Free 计划下，Pages 可用于公开仓库；仓库可见性可以在设置中调整。([docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site?utm_source=chatgpt.com)) ([docs.github.com](https://docs.github.com/articles/setting-repository-visibility?utm_source=chatgpt.com))

---

## 九、最短记忆版

只记住这 5 步就够了：

1. 新建 GitHub 仓库
2. 上传 `index.html / style.css / script.js`
3. 打开 **Settings → Pages**
4. 选择 **Deploy from a branch → main → /(root)**
5. 保存后访问生成的网址

---

## 十、给同学们的提醒

- 不要忘记上传 `index.html`
- 文件名大小写要一致
- 页面打不开时先检查设置，不要着急重建仓库
- 先让最简单的页面跑通，再慢慢加内容

祝你发布成功。
