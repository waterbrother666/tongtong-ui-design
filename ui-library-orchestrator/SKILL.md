---
name: ui-library-orchestrator
description: 为以 React 为主的产品页面按场景选择、安装、集成并在浏览器中验证外部 UI 组件或动效能力。当需要在多个基础组件、业务组件、AI 界面、营销展示、创意视觉和动画来源中选择最合适的方案，同时保持目标项目视觉语言时使用。
---

# UI 组件库编排器

使用外部 UI 库最擅长的能力，再将它的视觉 token 和组合方式适配到目标项目。安装后组件的行为、可访问性约定和公开 API 必须与上游实现保持一致。

## 从目标项目开始

1. 选库前先阅读仓库指令，并检查当前实现。
2. 需要快速盘点技术栈时，在本 Skill 目录下运行 `node scripts/inspect-ui-stack.mjs <project-root>`。
3. 确认包管理器、框架及版本、现有 UI 原语、`components.json`、样式系统、路径别名、设计 token、图标集和现有页面模式。
4. 明确页面需要表达的功能状态：加载、空数据、错误、部分数据、成功、禁用、危险操作、权限限制以及响应式行为。

不要向非 React 应用安装 React 组件。当前目录以 React 为主；对其他框架，应明确说明尚未验证兼容的目录项，只在用户另行授权其他方案后才实施。

## 按能力选择

每次选型都先阅读 [references/selection-matrix.md](references/selection-matrix.md)，然后只加载与当前职责匹配的组件库资料：

- 聊天、Agent、模型、工具调用、推理、引用、AI 工作流、语音或生成代码界面：阅读 [references/libraries/ai-elements.md](references/libraries/ai-elements.md)。
- 表单、导航、浮层、反馈、表格、布局等基础产品 UI，或需要建立项目可控的组件基线：阅读 [references/libraries/shadcn-ui.md](references/libraries/shadcn-ui.md)。
- SaaS、后台和业务页面中的完整交互模式，如登录卡、命令搜索、Kanban、转账、状态与活动组件：阅读 [references/libraries/spectrum-ui.md](references/libraries/spectrum-ui.md)。
- 可访问的动画控件、Radix/Base UI/Headless UI 原语、动画图标、文字效果、按钮和装饰背景：阅读 [references/libraries/animate-ui.md](references/libraries/animate-ui.md)。
- 聚焦于形变、数字/文字过渡、入场、对比、Dock、Tilt、Spotlight 和紧凑动画面板等单一动效能力：阅读 [references/libraries/motion-primitives.md](references/libraries/motion-primitives.md)。
- 营销页、Hero、Bento、Logo/评价滚动、设备模型和轻量装饰效果：阅读 [references/libraries/magic-ui.md](references/libraries/magic-ui.md)。
- 大量实验性文字、背景、光标、3D、画廊或创意交互，需要选择 JS/TS 与 CSS/Tailwind 源码变体：阅读 [references/libraries/react-bits.md](references/libraries/react-bits.md)。
- 对实时 HTML 施加 WebGL/WebGPU 流体、折射、粒子、材质或 3D 对象效果：阅读 [references/libraries/canvas-ui.md](references/libraries/canvas-ui.md)。
- 需要自定义时间线、滚动驱动、FLIP、拖拽、SVG、文字拆分或跨框架动画编排：阅读 [references/libraries/gsap-skills.md](references/libraries/gsap-skills.md)。

只有当多个库分别承担清晰不同的页面职责时才允许混用。不要仅为增加新奇感，就在同一个语义控件上叠加多个库。一条流程中的焦点、键盘、浮层和状态行为应优先由同一套原语系列负责。

## 安装前核实

组件库 API 和安装命令会变化。修改目标项目之前：

- 在官方文档或 registry 中确认组件仍然存在。
- 确认当前安装命令和 peer dependency 要求。
- 检查目标项目已安装的版本和锁文件。
- 优先只安装实际使用的组件，不要为少数组件安装整个目录。
- 使用目标项目的包执行器，不要产生第二份锁文件。
- 将上游 Skill 或 MCP 视为发现和获取入口，不要将其视为组件与目标项目兼容的证明。

绝不编造组件名、registry 标识符、导入路径、prop 或事件。如果在线文档无法确认 API，使用前必须检查已安装源码。

## 适配目标项目的设计语言

外部组件库的功能能力优先于本地重新实现；目标项目的样式优先于官网 Demo 的外观。

- 保留组件原生结构、状态模型、键盘行为、焦点管理和减少动画行为。
- 通过项目 CSS 变量、Tailwind token、`className`、官方插槽和本地组合进行适配。
- 复用项目的字体、间距、圆角、颜色、密度、层次、图标和文案语气。
- 避免在复制进项目的组件外再增加无意义的包装层或平行抽象。
- 后台和操作型页面中，动效必须服务于任务完成。只突出状态变化和层级，不要让每个元素都动起来。

## 验证结果

阅读 [references/quality-gates.md](references/quality-gates.md)，运行仓库对应检查，启动真实开发服务，并在浏览器中检查改动后的流程。覆盖重要状态，并至少检查一个窄视口和一个宽视口。查看控制台，并对动画或浮层组件验证键盘交互和减少动画设置。

如果用户要求实施，就完成修改和验证，不要停在建议阶段。如果用户只要方案或评审，则不要修改目标项目。

交付时说明：选中的组件库和具体组件、它们胜过其他选项的原因、修改的文件与依赖，以及实际验证的浏览器行为。

## 扩展目录

用户提供新的 UI 来源时，按 [references/adding-libraries.md](references/adding-libraries.md) 处理。在记录官方来源、获取方式、组件级优势、约束和选型边界前，不要将新库标记为已支持。
