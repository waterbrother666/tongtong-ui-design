# Magic UI

官方来源：

- 文档：https://magicui.design/docs
- 组件目录：https://magicui.design/docs/components
- 安装：https://magicui.design/docs/installation
- MCP：https://magicui.design/docs/mcp
- 代码仓库：https://github.com/magicuidesign/magicui

2026-09-16 已根据仓库提交 `52bc693` 核对。Magic UI 是基于 React、TypeScript、Tailwind CSS 和 Motion 的源码型动画组件集合，与 shadcn/ui registry 配合使用。

仓库当前采用 MIT 许可证。

## 最擅长的场景

Magic UI 适合营销页、产品首页、Hero、功能介绍、社会证明、品牌数据、设备预览和装饰背景。它的优势不是基础表单语义，而是把常见营销构图直接组合成可复用组件，并能沿用 shadcn/Tailwind 项目的 token。

后台核心流程、密集表格和表单应先选 shadcn/ui 或 Spectrum UI；仅在局部空状态、欢迎区或指标强调中使用 Magic UI。

## 组件能力

### 营销结构和社会证明

- `Marquee`、`Avatar Circles`：Logo、客户评价、成员或集成生态的横向/纵向展示。
- `Bento Grid`、`Animated List`：功能分组、动态事件或短列表展示。
- `Hero Video Dialog`：Hero 中的视频预览与播放入口。
- `Tweet Card`：社交证明；注意外部内容和失败降级。
- `Terminal`、`File Tree`、`Code Comparison`：开发者产品的命令、结构和前后代码展示，不是通用终端运行器。

### 主视觉和设备模型

- `Globe`、`Dotted Map`、`Icon Cloud`、`Orbiting Circles`：全球覆盖、节点、技术生态和关系展示。
- `Safari`、`iPhone`、`Android`：产品截图或视频的设备/浏览器外框。
- `Dock`、`Lens`、`Pointer`、`Smooth Cursor`、`Progressive Blur`：低密度预览和指针增强；触摸设备要降级。

### 文字、数字和 CTA

- `Text Animate`、`Typing Animation`、`Word Rotate`、`Morphing Text`、`Text Reveal`、`Dia Text Reveal`、`Blur Fade`：Hero 标题和短句入场。
- `Aurora Text`、`Animated Gradient Text`、`Animated Shiny Text`、`Sparkles Text`、`Line Shadow Text`、`Video Text`、`Kinetic Text`、`Text 3D Flip`：装饰标题，不用于长正文。
- `Number Ticker`、`Scroll Based Velocity`、`Hyper Text`、`Spinning Text`、`Highlighter`：指标、滚动和短文本强调。
- `Shimmer Button`、`Shiny Button`、`Rainbow Button`、`Ripple Button`、`Interactive Hover Button`、`Pulsating Button`：主要 CTA；一处流程保持统一按钮语义和样式。

### 背景和视觉效果

- `Animated Grid Pattern`、`Interactive Grid Pattern`、`Flickering Grid`、`Retro Grid`、`Dot Pattern`、`Grid Pattern`、`Hexagon Pattern`、`Striped Pattern`：低成本几何背景。
- `Particles`、`Meteors`、`Ripple`、`Light Rays`、`Noise Texture`、`Floating 3D Particles`：环境层；不要同时叠加多个持续动画。
- `Magic Card`、`Neon Gradient Card`、`Border Beam`、`Shine Border`、`Glare Hover`、`Animated Beam`、`Backlight`：卡片边界、关系流和聚光强调。
- `Confetti`：成功庆祝；不得替代持久的成功状态与可访问消息。
- `Animated Theme Toggler`：主题切换；仍应遵循项目现有 theme provider。

## 安装和 MCP

Magic UI 使用 shadcn registry。只在项目尚未初始化时运行 init，然后从当前组件页获取准确 slug：

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add @magicui/globe
```

组件通常进入项目的 UI 组件目录，并可能新增 `motion`、`cobe` 等依赖或全局 keyframe。安装后检查源码、别名、依赖和全局 CSS，不要假设示例中的 `@/components/ui/...` 与项目一致。

官方提供 MCP/CLI 接入方式，但除非用户明确要求，不自动修改全局 AI 客户端配置。

## 与其他来源的边界

- Magic UI 胜在 shadcn 风格营销构图和常见落地页模块；React Bits 胜在更广、更实验性的文字、光标、3D 和画廊效果，以及 JS/TS、CSS/Tailwind 变体。
- 简单背景或标题效果优先 Magic UI/React Bits，而不是 Canvas UI；只有需要实时 HTML 折射、流体或 GPU 材质时才选 Canvas UI。
- 多阶段滚动叙事或严格时序编排选 GSAP。
- Button、Dialog、表单和导航的核心语义仍由项目基础库负责，不因视觉示例更亮眼而替换。

## 验证重点

- Hero 首屏、字体加载和低端移动设备的性能，避免多个持续动画竞争主线程/GPU。
- 窄屏无横向溢出，设备模型、Marquee、Globe 和长标题能正确缩放。
- 动态背景不降低文字对比度，按钮焦点可见，纯 hover 效果有键盘和触摸路径。
- `prefers-reduced-motion` 下停止循环、视差、光标和大位移动画。
- 外部内容组件有加载、失败与占位状态；装饰 canvas/SVG 不污染可访问树。
