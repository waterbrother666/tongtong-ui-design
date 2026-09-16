# AI Elements

官方来源：

- 文档：https://elements.ai-sdk.dev/
- 安装：https://elements.ai-sdk.dev/docs/setup
- 上游 Skill：https://elements.ai-sdk.dev/docs/skill
- 代码仓库：https://github.com/vercel/ai-elements

2026-09-16 已根据仓库提交 `6a9d5b1` 核对。Registry 和版本要求可能变化，安装前必须重新核对官方来源。

## 最擅长的场景

AI Elements 是 AI 原生界面状态的优先选择。它遵循 shadcn/ui 约定并集成 AI SDK 模式，因此在后端输出流式消息、工具状态、模型元数据、引用、生成产物、语音或 Agent 工作流时最有优势。

它不是普通业务表单、CRUD 表格、通用仪表盘或营销动效的默认选择。

## 组件能力

### 对话和回复组合

- `Conversation`：可滚动消息容器，支持自动跟随底部和返回底部控件。
- `Message`：用户/助手布局、回复分支、消息操作和流式 Markdown 渲染。
- `Prompt Input`：带文本框、附件、提交状态和模型相关控件的输入器。
- `Attachments`：文件、图像、视频、音频和来源文档的呈现。
- `Suggestion`：可点击的后续问题或提示。
- `Sources` 和 `Inline Citation`：回复级来源和文内引用展示。
- `Reasoning` 和 `Chain of Thought`：可折叠的渐进式推理或步骤展示。
- `Shimmer`：克制的加载或文字渐进生成反馈。

### Agent、工具和执行状态

- `Tool`：展示工具输入、输出和执行状态。
- `Confirmation`：AI 工具授权的请求、接受、拒绝和已结束状态。
- `Plan`、`Task` 和 `Queue`：执行计划、任务进度、排队提示和待办状态。
- `Agent`：呈现模型、指令、工具和输出 schema。
- `Context`：展示上下文窗口使用、token 消耗和预估成本。
- `Model Selector`：可搜索的模型选择器。
- `Checkpoint`：可恢复的对话历史节点。

### 开发者和生成结果界面

- `Artifact`、`Code Block`、`Snippet`：生成内容、语法高亮代码块和紧凑命令。
- `Terminal`、`Stack Trace`、`Test Results`：流式终端输出、错误堆栈和测试套件状态。
- `File Tree`、`Commit`、`Package Info`、`Environment Variables`：仓库和运行时信息。
- `Sandbox`、`JSX Preview`、`Web Preview`：生成代码和渲染结果的组合展示。
- `Schema Display`：API 端点、请求参数和响应 schema。

### 语音和媒体

- `Audio Player`、`Speech Input`、`Mic Selector`、`Transcription` 和 `Voice Selector`：输入设备、播放、语音输入、转录和音色选择流程。
- `Persona`：以动画表达倾听、思考和说话状态。
- `Image`：AI 生成图像的呈现。

### 工作流画布

- `Canvas`、`Node`、`Edge`、`Connection`、`Controls`、`Panel` 和 `Toolbar`：用于可视化 Agent 或工作流编辑器的 React Flow 组件。

## 兼容性和安装

当前官方安装要求为 Node.js 18+、React 19、Next.js 14+（推荐 App Router）、AI SDK、shadcn/ui 和 Tailwind CSS 4。添加任何组件前都要核对目标项目的实际版本。

只安装选中的组件：

```bash
npx ai-elements@latest add message
```

也可使用 shadcn registry 形式：

```bash
npx shadcn@latest add @ai-elements/message
```

根据目标项目替换为对应的包执行器。组件通常按 `components.json` 的别名配置复制到 `@/components/ai-elements/`。安装后检查新生成的文件和依赖差异。

可选的上游知识 Skill 安装命令：

```bash
npx skills add vercel/ai-elements
```

该 Skill 适合查询详细组件 API，但它不是运行时依赖，不应仅因调用本编排 Skill 就全局安装。

## 样式和组合

- AI SDK part 类型和流式状态要与已安装组件源码保持一致。
- 应用目标项目的 shadcn CSS 变量、字体、间距、圆角和密度。
- 有需要时可修改复制进项目的组件源码，但必须保留可组合子组件约定。
- 产品外壳、表格、表单、导航和非 AI Dialog 继续使用项目常规 UI 系统。
- 不要暴露私密推理。只展示产品明确允许显示的推理或进度内容。

## 验证重点

- 流式内容不跳动、不重复，且不丢失滚动位置。
- 如果流程包含提交、停止、重试、批准、拒绝、工具错误和重连状态，需逐项验证。
- Markdown、代码、引用、附件和长内容不得溢出。
- 键盘焦点能正确到达输入器操作和折叠控件。
- 根据目标应用的安全模型，将生成内容和工具输出视为不可信数据。
