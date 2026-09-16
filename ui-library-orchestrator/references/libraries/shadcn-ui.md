# shadcn/ui

官方来源：

- 文档：https://ui.shadcn.com/docs
- 组件：https://ui.shadcn.com/docs/components
- CLI：https://ui.shadcn.com/docs/cli
- Registry：https://ui.shadcn.com/docs/registry
- 代码仓库：https://github.com/shadcn-ui/ui

2026-09-16 已根据仓库提交 `2b3e6d4` 核对。shadcn/ui 是开放源码组件与 Registry 的分发体系：CLI 把可编辑源码加入目标项目，而不是要求页面依赖一个不可见的组件运行时。

仓库当前采用 MIT 许可证；第三方 registry 项可能使用不同许可证，需逐项核对。

## 最擅长的场景

shadcn/ui 是产品 UI 的默认基础层。普通后台、设置页、CRUD、导航、表单、浮层、反馈、表格、卡片和页面外壳，应先检查项目已有 shadcn 组件，再考虑更强视觉或更专用的外部来源。

它的优势是语义行为、组合性、项目所有权、设计 token 和 Registry 生态。Spectrum UI、Magic UI、Animate UI、AI Elements 和 Canvas UI 等多个来源也复用 shadcn 安装模式，因此正确识别 `components.json` 是整个编排流程的基础。

## 组件级路由

- 操作：`Button`、`Button Group`、`Toggle`、`Toggle Group`。
- 表单：`Field`、`Input`、`Input Group`、`Textarea`、`Select`、`Combobox`、`Checkbox`、`Radio Group`、`Switch`、`Slider`、`Input OTP`、`Calendar`、`Date Picker`。
- 数据呈现：`Table`、`Card`、`Badge`、`Avatar`、`Item`、`Data Table` 组合。
- 导航：`Sidebar`、`Navigation Menu`、`Breadcrumb`、`Tabs`、`Pagination`、`Menubar`。
- 浮层：`Dialog`、`Alert Dialog`、`Sheet`、`Drawer`、`Popover`、`Hover Card`、`Tooltip`、`Dropdown Menu`、`Context Menu`、`Command`。
- 反馈：`Alert`、`Progress`、`Skeleton`、`Spinner`、`Sonner`/toast、`Empty`。
- 布局：`Accordion`、`Collapsible`、`Resizable`、`Scroll Area`、`Separator`、`Aspect Ratio`。
- 数据可视化：`Chart`；先确认项目是否已使用 Recharts 及其版本。

使用完整组合，不要抽掉关键语义子组件。例如 Dialog/Sheet/Drawer 必须有 Title，Avatar 必须有 Fallback，TabsTrigger 必须位于 TabsList 中，Select/Dropdown 项目应放进对应 Group。

## 初始化、查询和安装

首先使用目标项目的包执行器。示例：

```bash
pnpm dlx shadcn@latest info --json
pnpm dlx shadcn@latest search @shadcn -q "dialog"
pnpm dlx shadcn@latest docs button dialog select
pnpm dlx shadcn@latest add button dialog
```

仅在尚无有效配置时初始化：

```bash
pnpm dlx shadcn@latest init
```

CLI 支持 Next.js、Vite、TanStack Start、React Router、Astro 和 Laravel 模板。不要由框架名称猜测路径；以 `info --json` 返回的 framework、Tailwind 版本、base、iconLibrary、aliases 和 resolvedPaths 为准。

如果上游官方 shadcn Skill 已安装，可用它获取详细规则：

```bash
npx skills add shadcn/ui
```

Skill 不是运行时依赖，也不应在每次页面任务中重复安装。

## Registry 与更新规则

- 添加前用 `search`、`docs` 和 `view` 确认真实名称、API 与依赖。
- 第三方 registry 使用显式命名空间，如 `@magicui/...`；不要默认猜测来源。
- 对已存在组件更新时，先用 `add <item> --dry-run` 和 `--diff <file>` 查看影响，保留项目本地修改。
- 不经用户明确同意，不对已定制组件使用 `--overwrite`。
- 安装后阅读复制进项目的文件，修正硬编码别名、图标库、RSC/client boundary 和不符合项目原语体系的依赖。

## 设计适配和选型边界

- 以 CSS 变量和语义 token 适配颜色、字体、圆角和密度，避免到处写原始颜色值。
- `className` 主要用于布局与有限组合；优先使用组件已有 variant。
- 业务型完整模式可选 Spectrum UI；AI 原生状态选 AI Elements；动画语义控件选 Animate UI；展示型 Hero 选 Magic UI/React Bits；复杂编排选 GSAP；GPU 材质选 Canvas UI。
- 第三方组件即便通过 shadcn CLI 安装，也不自动继承 shadcn 的可访问性质量，必须按源码验证。

## 验证重点

- 表单 label、description、error、disabled、required 和 `aria-invalid` 关系正确。
- Overlay 的键盘、焦点限制、焦点返回、Escape 和 stacking 正确。
- light/dark 主题、语义 token、窄视口、长文案和本地化不破版。
- 运行 lint、类型检查、测试和浏览器流程；对 registry 安装前后检查 manifest、锁文件和生成文件差异。
