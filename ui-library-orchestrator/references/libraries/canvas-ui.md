# Canvas UI

官方来源：

- 文档：https://canvasui.dev/docs
- 组件目录：https://canvasui.dev/components
- 安装：https://canvasui.dev/docs/installation
- 渲染说明：https://canvasui.dev/docs/rendering
- MCP：https://canvasui.dev/docs/mcp
- 代码仓库：https://github.com/DavidHDev/canvas-ui

2026-09-16 已根据仓库提交 `44de378` 核对。Canvas UI 是将 WebGL/WebGPU 效果覆盖到实时、仍可交互 HTML 上的创意视觉组件库，支持 React、Vue、Svelte、Solid、Preact 和原生 JavaScript。

## 最擅长的场景

当设计核心是 GPU 视觉效果，而不是普通 DOM 入场动画时选择 Canvas UI：流体、玻璃折射、粒子重建、布料、冰霜、雨滴、像素/抖动、ASCII、材质和 3D 对象。它适合品牌首页、产品展示、作品集和低密度体验区，不是后台表格、表单或常规导航的默认来源。

## 组件能力

### 实时 HTML 材质与形变

- `Liquid`、`Ripple`、`Displacement`、`Force Field`：在内容表面产生流体、波纹、位移和冲击波。
- `Glass`、`Frost`、`Droplets`、`Bubble`、`Clouds`：折射、结霜、雨滴、玻璃泡和雾气覆盖。
- `Canvas`、`Cloth`、`Bend`、`Hex Float`、`Peel`：将实时界面表现为画布、布料、折面、六边形或揭层材质。
- `Blaze`、`Flame Wrap`、`Laser`：火焰、热扰动和滚动揭示；只用于明确的视觉主角。

### 像素、字符和广播效果

- `Asciify`、`ASCII Sweep`、`Decrypt Reveal`：字符化局部内容、扫过式内容切换和解密揭示。
- `Glitch`、`VHS`、`Retro Dither`、`Glyph Rain`、`Grid`：广播故障、磁带、抖动、字形雨和网格变化。
- `Particle Reveal`、`Particle Scroll`、`Shatter`：粒子揭示、滚动溶解和破碎过渡。

### 对象渲染

- `ASCII Object`、`Dithered Object`、`Ink Object`、`Glass Object`、`Liquid Object`、`Particle Object`：把 GLB/glTF、SVG 或图像转换为字符、抖动、油墨、玻璃、液体或粒子对象。
- `Magnify`：HUD 式放大与扫描。

## 安装、渲染器与 MCP

Canvas UI 通过 shadcn registry 复制源码。只在项目尚未配置 shadcn 时初始化，然后从当前组件页复制准确命令：

```bash
npx shadcn@latest init
npx shadcn@latest add @canvas-ui/liquid-react
```

WebGL 是默认选择，浏览器覆盖更广。存在 WebGPU 版本时使用 `-webgpu` 后缀，例如：

```bash
npx shadcn@latest add @canvas-ui/liquid-react-webgpu
```

不要自行拼接其他组件/框架标识符，必须从当前文档确认。CLI 通常写入 `components/canvasui/`。WebGPU 版本使用 `vgpu` 和 WGSL；部分对象效果会依赖 `three`。MCP 可用于发现和安装，但除非用户明确要求，不修改全局 MCP 配置。

## 平台约束

- 当前 React 源码面向 React 19；Vue 面向 3.5、Svelte 面向 5、Solid 面向 1.9、Preact 面向 10。安装前检查目标版本。
- 部分 html-in-canvas 组件仍依赖实验性 `canvas-draw-element`。文档会标记这些组件；生产环境可能需要 Chrome Origin Trial。不能把官网可运行视为目标域名也自动可用。
- 不支持相关能力的浏览器应降级为未施加效果的 HTML。必须实际验证降级，而不是只看支持浏览器。
- WebGPU 不可用时应显示原内容。除非有明确理由，优先 WebGL。
- 仓库当前采用 MIT + Commons Clause：可在应用、网站或产品中使用和修改，但不得出售、再许可或重新分发这些组件本身。组件市场、模板包或移植库场景必须重新审查许可证。

## 与其他来源的边界

- 只需 CSS/Motion 背景、粒子或渐变时，Magic UI、React Bits 或 Animate UI 更轻。
- 只需滚动时序、DOM/SVG 形变或可控 timeline 时，GSAP 更合适。
- 密集后台和关键业务流程不使用 Canvas UI 覆盖主要阅读/操作区域。
- 同一视口通常只使用一个高成本 GPU 主效果；不要叠加多个 Canvas UI 组件与其他持续背景动画。

## 验证重点

- 在目标支持矩阵中检查 WebGL/WebGPU、实验 API 和无能力降级。
- 低端 GPU、移动端、缩放、高 DPI 和窗口尺寸变化下检查帧率、显存、资源释放和发热。
- 内容仍可选择、点击、聚焦和滚动，Canvas 不拦截必要指针事件。
- 文字对比度和可读性不被折射、粒子或噪声破坏。
- 页面隐藏、组件卸载或路由切换后停止渲染循环并释放资源。
- 减少动画、触摸输入和键盘操作均有可用路径。
