# 选型矩阵

只选择能直接表达产品行为的最小组件集。一个库胜出，必须是因为某项具体能力，而不是因为官网 Demo 更吸引人。

## 主要路由

| 产品需求 | 优先来源 | 需检查的组件或系列 | 胜出原因 |
| --- | --- | --- | --- |
| 普通后台、设置、CRUD、表单、导航、浮层和反馈 | shadcn/ui | `Field`、`Input`、`Select`、`Table`、`Sidebar`、`Dialog`、`Sheet`、`Command`、`Empty`、`Skeleton` | 作为稳定、语义化且可由项目完全控制的基础组件层，避免展示型组件侵入核心业务流程。 |
| 账户、支付、任务、活动、状态等完整业务模式 | Spectrum UI | `Account Access Card`、`Transfer Funds Card`、`Kanban Board`、`Command Search`、`Recent Activity`、`Status Badge`、`Undo Pill` | 提供比底层原语更完整的产品组合和状态表达，适合快速落地 SaaS/后台功能。 |
| 带流式响应的聊天记录 | AI Elements | `Conversation`、`Message`、`Prompt Input` | 用一套可组合系统处理聊天角色、流式内容、滚动和输入。 |
| 工具执行、审批、进度或 Agent 状态 | AI Elements | `Tool`、`Confirmation`、`Task`、`Plan`、`Queue`、`Agent`、`Context` | 它提供通用折叠组件无法表达的 AI 专用状态模型。 |
| 来源、引用、推理或模型选择 | AI Elements | `Sources`、`Inline Citation`、`Reasoning`、`Chain of Thought`、`Model Selector` | 直接处理 AI 响应元数据和渐进状态，避免自行发明交互约定。 |
| 生成代码、终端输出、测试、文件树或预览 | AI Elements | `Code Block`、`Artifact`、`Terminal`、`Test Results`、`File Tree`、`Stack Trace`、`JSX Preview`、`Web Preview`、`Sandbox` | 提供为 AI 输出组合而设计的开发者工具界面。 |
| 语音或多模态 AI 体验 | AI Elements | `Audio Player`、`Speech Input`、`Mic Selector`、`Transcription`、`Voice Selector`、`Persona`、`Attachments`、`Image` | 覆盖设备、媒体、转录和 AI SDK 相关状态。 |
| 节点式 AI 工作流编辑器 | AI Elements | `Canvas`、`Node`、`Edge`、`Connection`、`Controls`、`Panel`、`Toolbar` | 提供 React Flow 导向的成套组件，而不是孤立的装饰节点。 |
| 具有完整语义行为的动画表单/控件原语 | Animate UI | Radix UI、Base UI 或 Headless UI 系列中的 dialog、alert dialog、popover、tabs、switch、checkbox、radio、menu、sheet、sidebar、tooltip | 在成熟可访问原语上增加动效，同时让项目继续使用统一交互基础。 |
| 操作或状态反馈的动画图标 | Animate UI | 动画 Lucide 图标 | 保留熟悉的图标几何造型，同时为悬停、点击、加载和状态变化增加可控动效。 |
| 按钮动效 | Animate UI | Button、Copy、Flip、Icon、Liquid、Ripple、Theme Toggler | 提供完整按钮变体；只在具体反馈对交互有价值时使用。 |
| 已有 Animate UI 体系中的数字、文字或小型效果 | Animate UI | Counting/Sliding/Scrolling Number、Typing/Morphing/Rotating/Shimmering Text、Fade、Slide、Zoom、Auto Height | 适合已引入 Animate UI，或需要其 registry 和 `MotionConfig` 约定的项目。 |
| 不引入整套动画控件时的聚焦动效 | Motion Primitives | `Animated Number`、`Sliding Number`、`Text Effect`、`Text Loop`、`Text Morph`、`Text Roll`、`Text Scramble`、`Text Shimmer` | 细粒度、可复制进项目的动效原语，容易适配目标项目样式。 |
| 形变容器或紧凑动画导航 | Motion Primitives | `Morphing Dialog`、`Morphing Popover`、`Transition Panel`、`Toolbar Dynamic`、`Toolbar Expandable`、`Dock` | 提供普通控件不具备的布局连续性和紧凑过渡。 |
| 视觉入场或指针驱动增强 | Motion Primitives | `In View`、`Animated Group`、`Progressive Blur`、`Image Comparison`、`Spotlight`、`Tilt`、`Magnetic`、`Glow Effect`、`Border Trail` | 不替换页面控件系统，只补充一项明确的表现能力。 |
| 装饰性 Hero 或空状态背景 | Animate UI | Bubble、Fireworks、Gradient、Gravity Stars、Hexagon、Hole、Stars | 提供现成动态背景；只用于低密度界面，并保证可读性。 |
| 营销 Hero、Bento、社会证明、设备展示 | Magic UI | `Bento Grid`、`Marquee`、`Hero Video Dialog`、`Globe`、`Avatar Circles`、`Safari`、`iPhone`、`Android` | 与 shadcn/Tailwind 项目衔接直接，常见营销构图完整，适合快速形成统一落地页。 |
| 实验性文字、光标、3D、画廊或创意交互 | React Bits | `Split Text`、`Text Pressure`、`Glow Cursor`、`Magic Bento`、`Circular Gallery`、`Dome Gallery`、`Model Viewer`、`Fluid Glass` | 目录广、表现力强，并可按 JS/TS 与 CSS/Tailwind 选择源码变体。 |
| 实时 HTML 上的流体、折射、粒子、材质或 3D 对象效果 | Canvas UI | `Liquid`、`Glass`、`Frost`、`Particle Reveal`、`Cloth`、`ASCII Object`、`Glass Object` | 直接提供 WebGL/WebGPU 像素与材质效果，普通 DOM/Motion 组件难以等价实现。 |
| 多阶段动画、滚动固定/scrub、FLIP、拖拽或复杂 SVG | GSAP Skills | `gsap-timeline`、`gsap-scrolltrigger`、`gsap-plugins`、`gsap-react` | 适合自定义跨元素时序、滚动驱动和插件能力，不受单个现成组件结构限制。 |

## 重叠场景规则

### Animate UI 与 Motion Primitives

- 当元素首先是语义控件，且需要与现有 Radix UI、Base UI 或 Headless UI 栈对齐时，选 Animate UI。
- 当需求首先是包装或增强现有标记的动效行为时，选 Motion Primitives。
- Dialog、Popover、Accordion 和 Disclosure 应优先复用项目现有原语系列。不要仅为不同的入场动画替换已验证的可访问浮层。
- 两个库都有对应效果时，默认选择目标项目已存在的库，除非另一个库有明显更好的组件级能力。

### AI Elements 与通用组件

- 只在 AI 原生状态或开发者工具输出中选择 AI Elements。普通设置表单、CRUD 表格、仪表盘或与模型/工具执行无关的确认操作不需要 AI Elements。
- AI Elements 外围的布局、导航、表格和表单继续使用项目常规 UI 系统。AI Elements 不负责定义整个产品外壳。
- 只有在职责明确分离时，才在 AI 界面周边使用 Animate UI 或 Motion Primitives，例如现有动画侧边栏或一个数字过渡。不要为装饰动效修改流式时序或工具状态。

### shadcn/ui 与 Spectrum UI

- 普通表单、菜单、Dialog、Sheet、Table、Sidebar 和反馈基线优先 shadcn/ui，尤其是项目已有对应组件时。
- 当需求是完整的产品模式而不是孤立原语，例如转账、账户访问、Kanban、活动流、撤销或命令搜索，可优先 Spectrum UI。
- Spectrum UI 的 `Data Table` 不等于企业级数据网格。虚拟化、固定列、复杂编辑、聚合和超大数据量需要单独评估专用方案。
- Spectrum UI 的 `AI Chat Card` 只适合轻量聊天表现；流式、引用、工具执行和 Agent 状态优先 AI Elements。

### Magic UI 与 React Bits

- 常见营销构图、Bento、Logo/评价滚动、设备模型和与 shadcn 一致的落地页，优先 Magic UI。
- 需要更实验性的文字、光标、3D、玻璃、画廊或明确选择 JS/TS、CSS/Tailwind 源码变体时，优先 React Bits。
- 两个库有同类效果时，选择依赖更少、能直接复用项目 token、移动端与减少动画降级更完整的实现。
- 同一首屏只保留一个主视觉和少量辅助动效，不把两个库的强效果叠加成视觉噪声。

### Canvas UI、GSAP 与现成动效组件

- 需要实时 HTML 的流体、折射、粒子化、像素处理或 3D 材质时选 Canvas UI，并接受 GPU 和浏览器能力验证成本。
- 需要严格时间线、scroll pin/scrub、FLIP、拖拽、SVG 或多个组件同步时选 GSAP。
- 只需一个现成标题、背景、数字、Tilt 或 Morph 效果时，先选 Magic UI、React Bits、Animate UI 或 Motion Primitives，避免过度定制。
- Canvas UI 与 GSAP 可以组合，但必须分别负责 GPU 渲染和 DOM/时序控制，并验证生命周期与减少动画。

## 后台和操作型页面

后台驱动页面优先保证清晰度、信息密度、延迟反馈、错误恢复和权限边界。

- 用动画解释插入、删除、展开、进度或状态过渡。
- 表格、表单、筛选和导航应优先稳定，不要优先使用展示型背景或指针特效。
- 只有当指标数值变化且过渡能帮助用户注意更新时，才使用动画数字。
- 只有在键盘导航、焦点返回、Escape 关闭和减少动画都正确时，才使用动画 Dialog、Sheet 或 Disclosure。
- 危险操作与 AI 工具审批必须在视觉和行为上清晰区分，它们不是可互换状态。

## 平局时的优先级

1. 正确的功能模型和可访问性。
2. 与目标技术栈和现有原语系列兼容。
3. 对当前场景的精确组件能力。
4. 适配目标项目设计 token 的难度。
5. 依赖和运行时成本。
6. 视觉新奇性。
