# Motion Primitives

官方来源：

- 文档：https://motion-primitives.com/
- 代码仓库：https://github.com/ibelick/motion-primitives
- CLI 源码：https://github.com/ibelick/motion-primitives/tree/main/cli

2026-09-16 已根据仓库提交 `40f59b6` 核对。上游项目将自己标记为 Beta，因此在关键流程中使用组件前，要检查当前源码和实际行为。

## 最擅长的场景

Motion Primitives 是一套可复制进项目的 React UI Kit，基于 Motion 和 Tailwind CSS。它最擅长提供聚焦、可组合的动效行为：文字和数字过渡、入场、形变容器、动画面板、指针响应特效和图像对比。

当目标项目已经具备布局和语义控件，只需要一项定义清晰的动效能力时选它。它不应取代完整的表单或后台业务组件系统。

## 组件能力

### 状态和布局过渡

- `Accordion`、`Disclosure` 和 `Dialog`：紧凑的展开/收起和浮层动画。如果项目已有可访问原语系列，优先复用现有实现。
- `Transition Panel`：在相关面板状态、步骤、检查器或上下文内容间切换。
- `Animated Group`：协调一组子元素的入场或状态动画。
- `Animated Background`：在同级控件之间移动共享的选中/激活背景。
- `Carousel` 和 `Infinite Slider`：过渡或循环内容；在密集操作页面中避免自动运动。

### 文字和数字动效

- `Animated Number` 和 `Sliding Number`：适用于变化中的指标、计数、数量、百分比或实时状态值。
- `Text Effect`：通用文字入场和过渡。
- `Text Loop`：在短语之间循环切换。
- `Text Morph`：在不同标签或状态文字间平滑形变。
- `Text Roll`：滚动字符或单词。
- `Text Scramble`：技术感或游戏感文字揭示；在阅读效率重要的场景谨慎使用。
- `Text Shimmer` 和 `Text Shimmer Wave`：用于加载或渐进生成提示。
- `Spinning Text`：环形文字，通常属于装饰用途。

### 形变容器和紧凑交互

- `Morphing Dialog` 和 `Morphing Popover`：从触发器或卡片平滑扩展到详细内容，保持视觉连续性。
- `Toolbar Dynamic` 和 `Toolbar Expandable`：在有限空间中按上下文展示操作。
- `Dock`：指针响应的 macOS 风格导航或启动器。

### 入场和直接操作特效

- `In View`：内容进入视口时触发动画。
- `Scroll Progress`：表达阅读或工作流的滚动进度。
- `Image Comparison`：使用可拖动分隔线进行前后图像对比。
- `Progressive Blur`：用于边缘淡出、滚动提示或内容遮罩。
- `Cursor`、`Magnetic`、`Spotlight`、`Tilt` 和 `Glow Effect`：适用于低密度卡片、预览或 Hero 的指针响应强调。
- `Border Trail`：用动画边框强调激活或执行中的界面。

指针特效通常不适合触摸优先、可访问性敏感或高密度后台页面，除非它们能正确降级且有清晰用途。

## 安装

列出当前 CLI 中的组件：

```bash
npx motion-primitives list
```

只添加选中的组件：

```bash
npx motion-primitives add text-morph
```

CLI 会创建 `components/motion-primitives` 目录、复制组件源码，并使用检测到的包管理器安装所需依赖。大多数组件依赖 `motion`；`sliding-number`、`infinite-slider` 或可展开 Toolbar 等组件还会使用 `react-use-measure`。

运行 CLI 前要确认它能识别目标项目锁文件。运行后检查生成文件、导入、package manifest 和锁文件。当一次性包执行器可以稳定复现当前命令时，不要使用全局安装的 CLI。

## 样式和选型边界

- 将每个组件视为“行为 + 结构”，用目标项目 token 和内容密度替换 Demo 样式。
- 优先使用 transform 和 opacity 动画；对会改变布局或测量内容的组件，需在列表和表格中检查性能。
- 当需要 Radix UI、Base UI 或 Headless UI 语义时，主动画控件优先选 Animate UI。
- 当需要围绕现有项目组件的特定过渡或特效时，优先 Motion Primitives。
- 每个局部界面默认只使用一个强表现特效，除非已有明确的整体艺术方向。
- 纯悬停交互必须提供键盘和触摸替代方案，即使动画看起来很轻，也要测试 `prefers-reduced-motion`。
