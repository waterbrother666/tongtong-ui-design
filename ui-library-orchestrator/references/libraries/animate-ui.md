# Animate UI

官方来源：

- 文档：https://animate-ui.com/docs
- 安装：https://animate-ui.com/docs/installation
- MCP：https://animate-ui.com/docs/mcp
- 代码仓库：https://github.com/imskyleen/animate-ui

2026-09-16 已根据仓库提交 `efeb96f` 核对。安装前必须在当前组件页重新确认 registry 标识符。

## 最擅长的场景

Animate UI 是一套开放、以复制源码为核心的 React 组件分发库，基于 Tailwind CSS、Motion 和 shadcn 风格 registry。它的优势是：动画能力直接建立在成熟交互原语上，而不是事后再补一层动效。

当页面需要可访问的动画控件、动画 Lucide 图标、可复用文字/特效原语或有明确用途的装饰背景时选它。目标项目已使用 Radix UI、Base UI、Headless UI 或 shadcn 约定时，它尤其合适。

## 组件能力

### 动画原语系列

根据目标项目选择一套原语系列：

- Radix UI：Accordion、Alert Dialog、Checkbox、Dialog、Dropdown Menu、Files、Hover Card、Popover、Preview Link Card、Progress、Radio Group、Sheet、Sidebar、Switch、Tabs、Toggle、Toggle Group 和 Tooltip。
- Base UI：Accordion、Alert Dialog、Checkbox、Dialog、Files、Menu、Popover、Preview Card、Preview Link Card、Progress、Radio、Switch、Tabs、Toggle、Toggle Group 和 Tooltip。
- Headless UI：Accordion/Disclosure、Checkbox、Dialog、Popover、Switch 和 Tabs。

在当前目录中，Animate UI 是动画语义控件的优先选择。不要在一条流程中混用多套原语，除非目标项目已有明确原因和现有惯例。

### Animate UI 完整组件

- Avatar Group、Code、Code Tabs、Cursor、GitHub Stars Wheel、Tabs 和 Tooltip 提供已完成样式的动画组合。
- 按钮系列包含 Button、Copy、Flip、GitHub Stars、Icon、Liquid、Ripple 和 Theme Toggler。
- Community 组件包含 Flip Card、Management Bar、Motion Carousel、Notification List、Pin List、Playful Todolist、径向导航/菜单、Share Button 和 User Presence Avatar。Community 项目的实现差异可能更大，生产使用前要检查源码。

### 文字和特效原语

- 数字/文字：Counting Number、Scrolling Number、Sliding Number、Gradient Text、Highlight Text、Morphing Text、Rolling Text、Rotating Text、Shimmering Text、Splitting Text 和 Typing Text。
- 特效：Auto Height、Blur、Click、Effect、Fade、Highlight、Image Zoom、Magnetic、Particles、Shine、Slide、Theme Toggler、Tilt 和 Zoom。
- 结构辅助：Motion Grid、Pinned List、Scroll Progress、Slot、Spring、动画 Tabs 和 Tooltip。

### 图标和背景

- 动画 Lucide 图标适合操作、反馈、加载、导航切换和悬停提示，同时保留熟悉的图标语言。
- Bubble、Fireworks、Gradient、Gravity Stars、Hexagon、Hole 和 Stars 背景适用于 Hero、引导、空状态或庆祝界面。不要把它们放在密集表单、表格或长文字背后。

## 安装和 MCP

Animate UI 使用 shadcn 安装模式。只在目标项目尚未有效配置 shadcn 时才初始化：

```bash
npx shadcn@latest init
```

随后使用当前组件文档页中给出的准确 registry 标识符。已核对的示例：

```bash
npx shadcn@latest add @animate-ui/primitives-texts-sliding-number
```

不要从展示名称自行推导 registry 标识符，必须实时核对。

Animate UI 可通过 shadcn Registry MCP 发现和获取。如果用户环境已经提供该 MCP，可用它查询和获取 registry 项。MCP 可用不代表可以跳过生成差异检查或兼容性验证。除非用户明确要求，不要修改全局 MCP 配置。

## 可访问性和动效

如果应用尚未配置用户动效偏好，在合适的根节点加入 Motion 配置：

```tsx
import { MotionConfig } from "motion/react";

export function AppMotion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

确认减少动画模式会禁用大幅度的 transform/layout 动画，但保留有用的非空间反馈。对浮层和菜单还要测试焦点限制、焦点返回、Escape、外部交互和键盘导航。

## 样式和选型边界

- 使用目标项目 token 重新设置复制进项目的源码；官网 Demo 的颜色、圆角和密度与项目冲突时不保留。
- 保留选中原语系列的语义和交互约定。
- Dialog、Sheet、Menu、Popover、Tabs、Checkbox、Radio 和 Switch 的主要实现优先选 Animate UI，而不是 Motion Primitives。
- 当目标项目已有语义控件，只需要单一动效行为时，优先 Motion Primitives。
- 常规操作型页面不要随意使用背景、粒子、Liquid、Ripple、Tilt 和 Cursor 效果，除非它们用于表达状态，或用户明确要求展示型视觉。
