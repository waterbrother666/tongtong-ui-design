# React Bits

官方来源：

- 文档：https://reactbits.dev/
- 安装：https://reactbits.dev/get-started/installation
- 代码仓库：https://github.com/DavidHDev/react-bits
- Vue 官方移植：https://vue-bits.dev/
- Svelte 官方移植：https://sveltebits.xyz/

2026-09-16 已根据仓库提交 `64cbf95` 核对。React Bits 是面向 React 的大规模创意组件集合，上游当前提供 JS/TS 与 CSS/Tailwind 四种源码变体，并支持 shadcn 和 jsrepo 安装。

## 最擅长的场景

当页面需要明显的创意表达，且 Magic UI 的营销组件不够精确时选择 React Bits。它在文字动画、交互光标、实验性背景、3D/玻璃、画廊/轮播和高度可定制展示组件方面覆盖更广。

它不是业务语义、表单可访问性或后台一致性的默认来源。选中任何复杂效果前都要阅读当前组件源码、依赖和移动端行为。

## 组件能力

### 文字动画

- 清晰入场和状态：`Split Text`、`Blur Text`、`Text Type`、`Rotating Text`、`Count Up`、`Scroll Reveal`、`True Focus`。
- 字符与实验效果：`Scrambled Text`、`Decrypted Text`、`Glitch Text`、`Shiny Text`、`Fuzzy Text`、`ASCII Text`、`Split Flap Text`、`Particle Text`。
- 布局与滚动：`Circular Text`、`Curved Loop`、`Scroll Velocity`、`Scroll Float`、`Variable Proximity`、`Falling Text`、`Text Pressure`、`Warp Text`、`Depth Text`、`Fold Text`、`Echo Text`。

只把实验性文字用于短标题或装饰层；正文、表单 label 和关键状态必须保持静态可读。

### 交互与动画效果

- 光标/指针：`Glow Cursor`、`Target Cursor`、`Ghost Cursor`、`Blob Cursor`、`Splash Cursor`、`Crosshair`、`Click Spark`、`Magnet`。
- 揭示/转换：`Animated Content`、`Fade Content`、`Pixel Transition`、`Halftone Reveal`、`Scroll Expand`、`Sticker Peel`、`Glare Hover`。
- 图像/对象：`Image Trail`、`Metallic Paint`、`Shape Blur`、`Gradual Blur`、`Orbit Images`、`Logo Loop`。
- 场景效果：`Laser Flow`、`Magic Rings`、`Ribbons`、`Strands`、`Meta Balls`、`Cubes`、`Antigravity`、`Electric Border`、`Star Border`。

### 组合组件

- 画廊/轮播：`Depth Carousel`、`Morph Slider`、`Circular Gallery`、`Dome Gallery`、`Carousel`、`Flying Posters`、`Masonry`、`Drift Wall`、`Accordion Gallery`。
- 导航/菜单：`Card Nav`、`Pill Nav`、`Gooey Nav`、`Staggered Menu`、`Bubble Menu`、`Flowing Menu`、`Dock`、`Line Sidebar`。
- 卡片/玻璃：`Magic Bento`、`Tilted Card`、`Spotlight Card`、`Reflective Card`、`Pixel Card`、`Decay Card`、`Fluid Glass`、`Glass Surface`、`Glass Icons`、`Chroma Grid`。
- 操作与流程：`Stepper`、`Animated List`、`Scroll Stack`、`Stack`、`Elastic Slider`、`Counter`、`Option Wheel`、`Curved Input`、`Specular Button`。
- 3D/媒体：`Model Viewer`、`Lanyard`、`Profile Card`、`Folder`、`Infinite Menu`。

这些名称中部分可能属于较新或不同授权层级；实现前必须在当前免费目录和组件页再次确认。

### 背景

React Bits 提供大量 WebGL、Canvas、SVG 和 CSS 背景，例如 `Aurora`、`Beams`、`Ballpit`、`Balatro` 等。优先选择与设计概念直接相关的一个背景，并检查依赖、循环成本和降级；不要因为目录丰富就堆叠效果。

## 安装与源码变体

shadcn 安装示例：

```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

Registry 名称区分组件与源码变体，示例中的 `TS-TW` 表示 TypeScript + Tailwind。每次都从组件页复制当前命令，不要根据展示名猜大小写或后缀。也可使用 jsrepo 或手动复制对应的 JS-CSS、JS-TW、TS-CSS、TS-TW 源码。

根据目标项目已有语言和样式系统选变体：TypeScript 项目优先 TS；Tailwind 项目优先 TW；已有 CSS Modules/普通 CSS 约定时再考虑 CSS 版本。Vue/Svelte 应转向对应官方移植站，而不是把 React 版本硬装进项目。

仓库当前标注 MIT + Commons Clause；用于可分发组件集合、模板市场或类似再销售场景前，应再次审查当前许可证，不要只根据“可商业使用”一句话推断再分发权利。

## 与其他来源的边界

- Magic UI 更适合常见 shadcn 营销页构图；React Bits 更适合广泛、实验性、可选源码变体的创意效果。
- Canvas UI 更适合对实时 HTML 做 GPU 流体、折射和材质；React Bits 更适合独立背景、对象、文字或交互组件。
- 多阶段 timeline、scroll pin/scrub 和跨组件同步选 GSAP。
- 语义表单、Dialog、导航、数据表格和业务状态继续使用 shadcn/ui、Spectrum UI 或现有项目组件。

## 验证重点

- 检查每个组件的 runtime 依赖、素材、WebGL/Canvas 生命周期、事件监听和卸载清理。
- 在窄屏、触摸、键盘、低性能设备和无 hover 环境验证，不允许核心操作只跟随光标。
- 对 3D、粒子、持续背景和多个实例做性能分析；视口外暂停动画。
- `prefers-reduced-motion` 下提供静态替代，文字内容不依赖动画才能被读取。
- 检查源码变体与目标 Tailwind/TypeScript 配置一致，避免同时引入 CSS 和 Tailwind 两套实现。
