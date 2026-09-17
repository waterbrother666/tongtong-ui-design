# tongtong-ui-design

一个以中文为主、面向 AI 编程助手的 UI 组件库选型与集成 Skill。

它不会让 AI 机械地套用某一个组件库，而是先理解页面功能、目标项目技术栈和现有设计语言，再从多个 UI 与动效来源中选择最有优势的具体组件，直接完成安装、适配、运行和浏览器验证。

## 解决什么问题

当 AI 同时知道多个 UI 库时，常见问题不是“不会写组件”，而是：

- 不知道哪个库在当前场景真正更合适。
- 只根据官网视觉效果选库，没有考虑业务语义和可访问性。
- 混用多套 Dialog、Popover、表单或状态模型，导致行为不一致。
- 复制 Demo 外观，没有适配现有项目的字体、颜色、密度和设计 token。
- 安装后没有运行真实页面，也没有检查窄屏、键盘、减少动画和控制台错误。

`ui-library-orchestrator` 将这些问题转化为一套可复用的选型、实施和验证流程。

## 先看方案，再选风格

当你给出项目和页面/后端功能需求，但还没有决定风格或关键组件时，Skill 会先检查现有页面、接口状态和设计 token，再生成一份项目专属的 Markdown 视觉对比文件。它不会只写“圆润”或“方正”：候选方案要在文件中画出相应的形状与布局；需要准确展示颜色、圆角或阴影时，可嵌入原创 SVG 示意图。

每个候选组件都会附当前核对过的**官方具体组件**演示或文档链接、适用原因和限制。聊天里只给少量可回答的选择题，文件里保留完整对比。例如同一张卡片可以这样看：

```text
A · 圆润                         B · 方正
     ◯                       ┌───────────────┐
╭───────────────╮             │ □  标题        │
│   标题        │             ├───────┬───────┤
│  ╭────────╮   │             │ 操作 1 │ 操作 2│
│  │ 操作 1 │   │             └───────┴───────┘
│  ╰────────╯   │
╰───────────────╯
```

如果后端功能已经确定，选择题只涉及视觉风格和可替换的关键组件，不会把必要的字段、权限或错误处理变成可选项。你也可以指定参考设计，或说“你决定，直接做”，跳过选择阶段。

## 已支持的 UI 来源

| 来源 | 最适合的能力 | 典型组件或能力 |
| --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com/docs) | 产品 UI 基础层 | Form、Dialog、Sheet、Table、Sidebar、Command、Empty、Skeleton |
| [Spectrum UI](https://ui.spectrumhq.in/) | SaaS、后台和完整业务模式 | Account Access Card、Transfer Funds Card、Kanban Board、Recent Activity |
| [AI Elements](https://elements.ai-sdk.dev/) | AI 对话、工具调用和 Agent 状态 | Conversation、Message、Prompt Input、Tool、Reasoning、Sources |
| [Animate UI](https://animate-ui.com/docs) | 带完整语义行为的动画控件 | Radix/Base UI/Headless UI 动画原语、动画图标和按钮 |
| [Motion Primitives](https://motion-primitives.com/) | 小而聚焦的动效原语 | Text Morph、Animated Number、Transition Panel、Tilt、Spotlight |
| [Magic UI](https://magicui.design/) | 营销页和常见展示构图 | Bento Grid、Marquee、Globe、Hero Video Dialog、设备模型 |
| [React Bits](https://reactbits.dev/) | 实验性文字、背景、3D 和画廊 | Split Text、Glow Cursor、Circular Gallery、Fluid Glass、Model Viewer |
| [Canvas UI](https://canvasui.dev/) | 实时 HTML 上的 GPU 视觉效果 | Liquid、Glass、Frost、Particle Reveal、Cloth、对象材质 |
| [GSAP Skills](https://github.com/greensock/gsap-skills) | 复杂时间线和交互动画编排 | Timeline、ScrollTrigger、Flip、Draggable、SVG、React 生命周期 |

每个来源都有独立的中文资料模块，记录官方来源、组件级优势、安装方式、限制条件、重叠边界和浏览器验证重点。

## 快速选型原则

- 普通后台、表单、导航和浮层：先检查项目现有组件，再优先考虑 shadcn/ui。
- 完整账户、支付、任务、活动和状态模式：考虑 Spectrum UI。
- 流式对话、引用、工具执行和 Agent 状态：使用 AI Elements。
- 具有完整语义行为的动画控件：使用 Animate UI。
- 只需要一个局部文字、数字、形变或指针动效：使用 Motion Primitives。
- 常见营销 Hero、Bento、Logo/评价滚动和设备展示：使用 Magic UI。
- 更实验性的文字、背景、光标、3D 或画廊效果：使用 React Bits。
- 流体、折射、粒子、材质和实时 HTML GPU 效果：使用 Canvas UI。
- 严格时间线、滚动固定、scrub、FLIP、拖拽或复杂 SVG：使用 GSAP。

最终选择仍以功能模型、项目兼容性、可访问性和维护成本为准，而不是视觉新奇性。

## 安装

先查看仓库中可安装的 Skill：

```bash
npx skills add waterbrother666/tongtong-ui-design --list
```

安装到当前项目：

```bash
npx skills add waterbrother666/tongtong-ui-design \
  --skill ui-library-orchestrator
```

也可以安装到全局 Skill 目录：

```bash
npx skills add waterbrother666/tongtong-ui-design \
  --skill ui-library-orchestrator \
  --global
```

Skill CLI 会自动识别支持的 AI 编程助手。安装 Skill 只会提供选型和实施知识，不会自动向业务项目安装任何 UI 运行时依赖。

## 使用方式

在支持 Agent Skills 的 AI 编程助手中调用：

```text
使用 $ui-library-orchestrator 检查这个项目，先给我带组件直达链接的可视化 Markdown 选项，再按我的选择实现页面。
```

也可以直接描述目标，例如：

```text
实现一个带筛选、表格、批量操作和错误恢复的订单管理页面。
先检查当前项目，再从已支持的 UI 来源中选择最合适的组件。
保持项目现有风格，运行页面并在浏览器中验证。
```

Skill 会引导 AI：

1. 检查框架、包管理器、锁文件、`components.json`、现有组件和设计 token。
2. 明确加载、空数据、错误、成功、权限、危险操作和响应式状态。
3. 在风格或关键组件未定时，生成画出形状与布局的 Markdown 选项并询问偏好。
4. 根据场景选择最小且职责清晰的组件集合，从官方文档或 registry 核对组件名、直达链接、安装命令和依赖。
5. 用户选定后保留上游组件行为，把视觉样式适配到目标项目。
6. 运行类型、lint、测试和真实开发服务。
7. 在浏览器检查宽窄视口、键盘、焦点、减少动画和控制台错误。

## 项目结构

```text
ui-library-orchestrator/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── selection-matrix.md
│   ├── visual-choice.md
│   ├── quality-gates.md
│   ├── adding-libraries.md
│   └── libraries/
│       ├── ai-elements.md
│       ├── animate-ui.md
│       ├── motion-primitives.md
│       ├── shadcn-ui.md
│       ├── spectrum-ui.md
│       ├── magic-ui.md
│       ├── react-bits.md
│       ├── canvas-ui.md
│       └── gsap-skills.md
└── scripts/
    └── inspect-ui-stack.mjs
```

`SKILL.md` 只保存核心流程和路由；组件库细节按需加载，避免每次任务都占用不相关上下文。

## 技术栈检查工具

在 Skill 目录中运行：

```bash
node scripts/inspect-ui-stack.mjs /path/to/your-project
```

工具会读取目标项目的 `package.json`、锁文件和 `components.json`，识别：

- React、Next.js、Vue、Nuxt、Svelte、Astro 和 Vite。
- Tailwind、Radix UI、Base UI、Headless UI 和图标库。
- AI SDK、Motion、GSAP、React Flow、Three.js、WebGPU 和 Recharts。
- shadcn style、base、图标、别名和自定义 registry。

该工具只读取项目信息，不执行安装或修改。

## 设计原则

- 外部组件库的功能能力优先于重复造轮子。
- 目标项目的设计语言优先于组件库官网 Demo 的外观。
- 同一个语义控件不叠加多套组件库。
- 后台和操作型页面的动效必须服务于理解状态和完成任务。
- MCP、Skill 和 CLI 是发现或获取入口，不代表运行时自动兼容。
- 绝不编造组件名、registry 标识符、导入路径、prop 或事件。

## 收录新的组件库

新增来源时，需要同时完成：

1. 添加独立的 `references/libraries/<library>.md`。
2. 记录官方来源、核对日期、组件级优势、安装方式、许可证和平台约束。
3. 更新 `selection-matrix.md`，说明它在哪些场景胜出以及与现有来源的重叠边界。
4. 更新 `SKILL.md` 的按需路由。
5. 验证 Skill 结构和所有相关脚本。

只因为组件“看起来好看”并不足以将它加入支持目录。

## 许可证与第三方说明

本仓库自身内容采用 [MIT License](LICENSE)。

本仓库只提供对第三方 UI 来源的选型与集成指导，不重新分发这些组件库的源码。每个第三方项目保留自己的商标、版权和许可证。通过 registry、CLI、Package、MCP 或 Skill 使用第三方内容前，请核对对应项目当前许可证；尤其是带 Commons Clause 或其他再分发限制的项目。

## 状态

- Skill 结构已通过 Codex `skill-creator` 校验。
- 技术栈检查脚本已通过 Node.js 语法检查和真实 React/shadcn 项目结构测试。
- 组件 API、registry 名称和依赖会变化，执行具体页面任务时仍会重新核对官方来源。
