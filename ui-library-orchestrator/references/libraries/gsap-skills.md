# GSAP Skills

官方来源：

- Skill 仓库：https://github.com/greensock/gsap-skills
- GSAP 文档：https://gsap.com/docs/v3/
- React 指南：https://gsap.com/resources/React

2026-09-16 已根据仓库提交 `aed9cfd` 核对。该来源首先是教 AI 正确使用 GSAP 的一组 Skill，不是可直接放进页面的组件目录；运行时仍需按实现安装 `gsap`，React 项目通常还会安装 `@gsap/react`。

上游 Skill 仓库当前为 MIT 许可证；具体项目中的 GSAP 运行时和插件仍应按当前官方许可说明核对。

## 最擅长的场景

当需求无法用一个现成组件准确表达，需要编排多个元素、滚动位置和交互状态时，GSAP 最有优势。典型场景包括：分镜式 Hero、跨区段时间线、滚动固定与 scrub、FLIP 布局过渡、复杂 SVG、可拖拽/惯性操作、SplitText，以及 React/Vue/Svelte/原生 JavaScript 中一致的动画控制。

普通按钮、Dialog、表单或卡片应先选有完整语义和可访问行为的组件库。不要用 GSAP 重做一个现成语义控件，只因为它能做更复杂的入场动画。

## Skill 能力与对应任务

- `gsap-core`：`gsap.to()`、`from()`、`fromTo()`、easing、duration、stagger 和默认值；处理单元素或同类元素的补间。
- `gsap-timeline`：顺序、position parameter、label、嵌套和播放控制；处理多个阶段必须保持时序关系的动画。
- `gsap-scrolltrigger`：trigger、start/end、pin、scrub、refresh 和清理；处理滚动联动、固定区段和视差叙事。
- `gsap-plugins`：Flip、Draggable、Inertia、Observer、ScrollToPlugin、ScrollSmoother、SplitText、ScrambleText、MotionPath、MorphSVG、DrawSVG、CustomEase 等；只在需求确实对应插件时加载。
- `gsap-react`：`useGSAP`、ref、scope、`gsap.context()`、SSR 和卸载清理；React/Next.js 实现必须读取。
- `gsap-frameworks`：Vue、Nuxt、Svelte 等生命周期、选择器作用域和卸载清理。
- `gsap-performance`：transform、批处理、`will-change` 和 ScrollTrigger 性能；长页面、移动端或大量实例时读取。
- `gsap-utils`：`clamp`、`mapRange`、`normalize`、`interpolate`、`snap`、`wrap`、`toArray` 和 `pipe`；用于交互值映射和可复用动画计算。

只加载本次任务需要的 Skill。例如 React 的滚动叙事通常读取 `gsap-react`、`gsap-timeline`、`gsap-scrolltrigger` 和 `gsap-performance`，不需要无差别加载全部 Skill。

## 安装与实现

可选的上游知识 Skill 安装命令：

```bash
npx skills add https://github.com/greensock/gsap-skills
```

这不会替目标项目安装运行时代码。React 项目的常见运行时依赖为：

```bash
npm install gsap @gsap/react
```

根据目标项目替换包管理器。插件必须显式 import 并在应用合适位置执行 `gsap.registerPlugin(...)`。React 中优先使用 `useGSAP`，为选择器提供容器 `scope`，事件回调使用 `contextSafe`，并确保卸载时还原 context。不要在 SSR 阶段执行浏览器动画。

## 与其他来源的边界

- 单一文字、数字、Tilt、Spotlight 或 Morph 效果已有 Motion Primitives/Animate UI 时，优先使用现成原语。
- Magic UI 或 React Bits 已提供符合需求的完整展示组件时，先比较其源码、依赖和可维护性，再决定是否改用 GSAP 定制。
- Canvas UI 的优势是着色器、流体、折射和 GPU 像素处理；GSAP 的优势是 DOM/SVG 属性、时间线和交互时序。两者只有在职责清楚时才组合。
- 页面已有 Motion 动画系统且只需简单过渡时，不要为了统一性较低的一处效果再引入 GSAP。

## 验证重点

- 检查卸载、路由切换、重复渲染和 Strict Mode 下是否创建重复 timeline 或 listener。
- ScrollTrigger 在字体、图片、异步内容和响应式布局完成后位置仍正确，必要时刷新。
- 只优先动画 transform、opacity 等低成本属性；用性能工具检查长任务、掉帧和布局抖动。
- `prefers-reduced-motion` 下停用滚动固定、大位移和持续循环，并保留内容可读性。
- 键盘、触摸和不支持 hover 的设备仍能完成任务；动画不能成为理解或操作页面的唯一渠道。
