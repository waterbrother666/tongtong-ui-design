# Spectrum UI

官方来源：

- 文档：https://ui.spectrumhq.in/docs
- MCP：https://ui.spectrumhq.in/docs/mcp
- AI 信息页：https://ui.spectrumhq.in/llm-info
- 代码仓库：https://github.com/arihantcodes/spectrum-ui

2026-09-16 已根据仓库提交 `1c251a2` 核对。这里的 Spectrum UI 指 `ui.spectrumhq.in` 上的 React/Next.js 组件库，不是 Adobe Spectrum。

## 最擅长的场景

Spectrum UI 最适合把常见产品需求快速落成一个完整、带状态和动效的业务模式，而不只是一个底层原语。它对 SaaS 后台、账户、支付/转账、任务、搜索、活动、状态和反馈组件更有优势；源码通过 shadcn registry 进入项目，可按本地设计 token 修改。

它不替代成熟企业数据网格，也不替代 AI Elements 的完整流式对话和工具状态模型。

## 组件能力

### 账户、支付和表单流程

- `Account Access Card`、`Login Card`、`Profile Dropdown`：账户访问、登录和个人菜单组合。
- `Transfer Funds Card`、`Quantity Stepper`、`Datetime Picker`、`Dual Range Slider`：金额/数量、时间和范围输入流程。
- `Floating Label Input`、`Autosize Textarea`、`Multiple Selector`、`Password Strength`：输入、标签、多选和密码反馈。
- `Hold to Confirm`：高意图确认交互；仍需提供清晰文案、键盘路径和失败状态。

### 后台、导航和数据呈现

- `Data Table`、`Kanban Board`、`Tree Nav`、`Nav List Card`、`Command Search`、`Beam Search Bar`：列表、看板、层级导航和命令搜索。
- `Recent Activity`、`Status Badge`、`Task Checkbox`、`Notification Bell`、`Kbd Key`：活动、状态、任务、通知和快捷键提示。
- `Animated SVG Chart`、`Number Ticker`、`Infinite Scroll`、`Skeleton Reveal`：指标、加载和长列表反馈。
- `Expandable Action Bar`、`Animated Drawer`、`Toast Stack`、`Undo Pill`：上下文操作、抽屉、通知与撤销。

### 产品沟通和社交反馈

- `Feedback Card`、`Star Rating`、`Reaction Bar`、`Like Button`、`Follow Button`、`Share Button`：反馈、评分和社交操作。
- `FAQ Tabs Card`、`Image Preview`、`Avatar Stack`、`AI Chat Card`：FAQ、媒体预览、协作者和轻量聊天卡片。
- `Animated Alert`、`Animated Switch`、`Loading Button`、`Text States`、`Spinner`：状态变化和执行反馈。

### 展示型卡片和按钮

- `Animated Card`、`Beam Card`、`3D Tilt Card`、`3D Event Badge`、`Scratch Card`：低密度展示区的视觉卡片。
- `Button`、`Metal Button`、`Morph Button`、`Metal Prompt Bar`：强调 CTA 或输入操作；后台中应克制使用强视觉版本。

基础 `Accordion`、`Card` 等可用，但若项目只需要稳定原语并已采用 shadcn/ui，应优先复用项目现有组件。

## 安装和 MCP

组件通过 shadcn registry 安装：

```bash
npx shadcn@latest add @spectrumui/<component>
```

`<component>` 必须从组件当前文档页或 MCP 返回值获取，不能从展示名称猜测。安装后源码位于项目中，需检查新增依赖、`"use client"`、硬编码导入路径和 Tailwind token。

官方 MCP 启动命令为：

```bash
npx -y @spectrumui/mcp
```

它可列出、搜索、读取和安装组件。只有用户明确要求配置 MCP 时才修改客户端配置；在普通页面任务中直接查文档与 registry 即可。

## 技术与选型边界

- 当前组件以 React client component、TypeScript、Tailwind、Motion/Framer Motion 和 Radix UI 为主，重点验证 Next.js/React 实际版本。
- Spectrum UI 适合业务型组合；通用 `Button`、`Dialog`、`Table`、表单和导航基线优先 shadcn/ui。
- 高密度企业数据网格、复杂虚拟化表格和大量后台表单不应仅因有 `Data Table` 就默认选择 Spectrum UI。
- AI Chat Card 适合轻量展示；流式消息、引用、工具调用、审批和 Agent 状态优先 AI Elements。
- 营销 Hero 的大面积装饰效果，Magic UI/React Bits/Canvas UI 通常更精确。

## 验证重点

- 检查所有 client boundary、Radix 焦点行为、Escape、焦点返回和键盘导航。
- 表格、看板、无限滚动和搜索在真实数据量、空数据、错误与加载状态下可用。
- 支付、确认、删除和撤销交互不得只依赖动画表达结果。
- 对复制进项目的源码运行 lint、类型检查和测试；确认组件依赖未重复引入另一套原语。
- 动画遵循减少动画偏好，移动端不存在横向溢出或仅 hover 可见的操作。
