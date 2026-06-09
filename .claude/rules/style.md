# MotherDuck 视觉风格设计规范

本规范基于 MotherDuck 官网公开页面的视觉观测与像素采样，分为**直接可观察值**和**复刻建议值**两类。凡未公开的 token（断点、字号、圆角、动效参数）均为保守重建值，应用时可在视觉走查后微调。

---

## 一、视觉语言核心原则

MotherDuck 风格 = **工程工具骨架 + 拟物插图 + 高对比平涂 + 温和中性界面**

1. **暖白/白色表面**配深灰描边与低饱和中性色
2. **亮黄、珊瑚红、天蓝、青绿**等少量高识别色作为品牌强调色，绝不滥用
3. 营销页：大标题 + 双 CTA + 插图/视频 + 成组模块的叙事节奏
4. 工具界面：轻量边框 + 浅灰分割线 + 蓝紫焦点态 + 密集表格 + IDE 节奏
5. **禁止使用复杂渐变**，主导方法是纯色平涂；可用低透明叠加做细节层次

---

## 二、CSS Design Tokens

```css
:root {
  /* ─── Typography ───────────────────────────────
     官网未直接披露字体家族名，以下为复刻建议 */
  --md-font-sans: system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
  --md-font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  /* ─── Core Colors ──────────────────────────────
     来源：官网位图/截图像素采样（直接可观察） */
  --md-color-ink:           #383838;  /* 主文字、描边、插图轮廓 */
  --md-color-canvas:        #f4efea;  /* 暖白背景、插图面板底   */
  --md-color-surface:       #ffffff;  /* 卡片、表格、对话层     */
  --md-color-coral:         #ff7169;  /* 品牌强调、AI/错误点缀  */
  --md-color-yellow:        #ffde00;  /* 品牌亮点、小鸭强调区   */
  --md-color-sky:           #6fc2ff;  /* 辅助高亮、图形补色     */
  --md-color-teal:          #16aa98;  /* 辅助强调、生态/系统感  */
  --md-color-navy:          #0a3064;  /* 深色顶栏、深底按钮     */
  --md-color-lavender:      #6670d6;  /* 焦点主按钮、编辑态     */
  --md-color-border-subtle: #dadada;  /* 轻边框、表格分隔线     */
  --md-color-error:         #d7544d;  /* 错误描边与提示         */

  /* ─── Opacity Variants ─────────────────────────
     复刻建议：低透明叠加代替渐变 */
  --md-ink-08:       rgba(56,  56,  56,  .08);
  --md-ink-12:       rgba(56,  56,  56,  .12);
  --md-lavender-12:  rgba(102, 112, 214, .12);
  --md-sky-16:       rgba(111, 194, 255, .16);
  --md-error-12:     rgba(215, 84,  77,  .12);

  /* ─── Spacing ──────────────────────────────────
     复刻建议：4px 基础单位，双密度策略
     营销页 section 宽松；工具界面控件紧凑 */
  --md-space-1:   4px;
  --md-space-2:   8px;
  --md-space-3:   12px;
  --md-space-4:   16px;
  --md-space-5:   24px;
  --md-space-6:   32px;
  --md-space-7:   48px;
  --md-space-8:   64px;
  --md-space-9:   80px;
  --md-space-10:  96px;
  --md-space-11:  120px;

  /* ─── Border Radius ────────────────────────────
     按截图像素近似值推定 */
  --md-radius-xs:   4px;
  --md-radius-sm:   6px;
  --md-radius-md:   8px;
  --md-radius-lg:   12px;
  --md-radius-pill: 999px;

  /* ─── Shadow ───────────────────────────────────
     观察到"轻阴影"，精确参数未公开，以下为复刻建议 */
  --md-shadow-card:   0 2px  8px rgba(56,56,56,.12);
  --md-shadow-dialog: 0 4px 16px rgba(56,56,56,.10);

  /* ─── Motion ───────────────────────────────────
     复刻建议：可感知但不戏剧化 */
  --md-ease-out:       ease-out;
  --md-ease-dialog:    cubic-bezier(.2,.8,.2,1);
  --md-duration-fast:  120ms;
  --md-duration-base:  160ms;
  --md-duration-slow:  200ms;

  /* ─── Layout ───────────────────────────────────
     营销页精确容器宽度未公开，以下为复刻建议 */
  --md-container-max: 1280px;
  --md-grid-gap:       24px;
}
```

---

## 三、排版规范

| 角色 | 字重 | 字号 | 行高 | 字距 |
|---|---:|---:|---:|---:|
| Display / H1 | 700 | 64px | 72px | -0.02em |
| H2 | 700 | 48px | 56px | -0.02em |
| H3 | 650 | 32px | 40px | -0.01em |
| Lead / 副标题 | 450 | 18px | 28px | 0 |
| Body | 450 | 16px | 24px | 0 |
| Caption / Small | 500 | 14px | 20px | 0 |
| Eyebrow（标签/导航） | 700 | 12px | 16px | +0.08em，全大写 |
| Code / SQL | 400 | 14px | 22px | 0，等宽字体 |

```css
.md-display  { font: 700 64px/72px var(--md-font-sans); letter-spacing: -0.02em; }
.md-h2       { font: 700 48px/56px var(--md-font-sans); letter-spacing: -0.02em; }
.md-h3       { font: 650 32px/40px var(--md-font-sans); letter-spacing: -0.01em; }
.md-lead     { font: 450 18px/28px var(--md-font-sans); }
.md-body     { font: 450 16px/24px var(--md-font-sans); }
.md-caption  { font: 500 14px/20px var(--md-font-sans); }
.md-eyebrow  { font: 700 12px/16px var(--md-font-sans); letter-spacing: .08em; text-transform: uppercase; }
.md-code     { font: 400 14px/22px var(--md-font-mono); }
```

**规则：**
- 导航链接使用 Eyebrow 风格（全大写 + 宽字距）
- 工具界面标题保持 Caption 或 Small 级别，信息密度优先
- 代码/SQL 必须使用等宽字体，禁止混用无衬线字体

---

## 四、色彩使用规则

### 允许
- 正文、按钮文案优先使用 `ink (#383838)` 深灰，不用白字彩底
- 主按钮：`lavender` 底 + 白字（注意：`#6670d6` 白字对比度 4.33:1，属边缘值，正常字号可用，小字需压深底色）
- 深色区域（顶栏/Hero 深底）：`navy` 底 + 白字（对比度 12.97:1，AAA）
- 品牌点缀色 `yellow / coral / sky / teal` 用于插图、图标、badge、状态指示，**不作为大面积背景**

### 禁止
- 白字 + `coral (#ff7169)` 底（对比度 2.69:1，不通过）
- 白字 + `teal (#16aa98)` 底（对比度 2.90:1，不通过）
- 渐变背景（官网未观察到稳定可复用品牌渐变）
- 多种强调色同时出现在同一区块（最多 1 种强调色 + 中性色）

### 对比度速查

| 前景 / 背景 | 对比度 | 级别 |
|---|---:|---|
| `#383838` / `#ffffff` | 11.73:1 | AAA |
| `#383838` / `#f4efea` | 10.26:1 | AAA |
| `#ffffff` / `#0a3064` | 12.97:1 | AAA |
| `#383838` / `#ffde00` | 8.77:1 | AAA |
| `#383838` / `#6fc2ff` | 6.05:1 | AA |
| `#ffffff` / `#6670d6` | 4.33:1 | 边缘 |
| `#ffffff` / `#ff7169` | 2.69:1 | 不通过 |
| `#ffffff` / `#16aa98` | 2.90:1 | 不通过 |

---

## 五、布局系统

### 营销页布局（双列/三列栅格）

```
页面结构：
Top Nav → Hero → 客户/信任带 → 2-up 用例卡 → 3-up 定价/计划卡 → 深度内容区 → 大型页脚
```

| 模块 | 桌面 | 平板 | 移动 |
|---|---|---|---|
| 外层容器 | `max-width: 1280px; padding-inline: 32px` | `padding-inline: 24px` | `padding-inline: 16px` |
| Hero | 左 5~6 列文案，右 6~7 列插图 | 上下堆叠，文案优先 | 单列 |
| 用例区（2-up） | 2 列 | 1~2 列 | 1 列 |
| 定价区（3-up） | 3 列 | 2 列 | 1 列 |

```css
.md-section {
  max-width: var(--md-container-max);
  margin: 0 auto;
  padding-block: var(--md-space-10);
  padding-inline: var(--md-space-5);
}

.md-hero {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--md-grid-gap);
  align-items: center;
  padding-block: var(--md-space-10) var(--md-space-9);
}

.md-hero__copy  { grid-column: span 5; }
.md-hero__media { grid-column: span 7; }

@media (max-width: 1024px) {
  .md-hero { grid-template-columns: 1fr; }
  .md-hero__copy, .md-hero__media { grid-column: span 1; }
}
```

### 工具界面布局（三栏工作台）

基于文档截图像素测量值（总宽 1086px）：

| 区域 | 测量值 | 说明 |
|---|---:|---|
| 左侧对象浏览器 | ~208px | 固定宽侧栏 |
| 中央工作区 | ~597px | 弹性，优先占满 |
| 右侧 Column Explorer | ~281px | 固定宽侧栏，平板折叠为抽屉 |
| 顶栏高度 | ~51px | 工具栏 |

```css
.md-workspace {
  display: grid;
  grid-template-columns: 208px 1fr 281px;
  grid-template-rows: 51px 1fr;
  height: 100vh;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .md-workspace { grid-template-columns: 208px 1fr; }
  .md-column-explorer { display: none; } /* 折叠为抽屉 */
}
```

---

## 六、组件规范

### 按钮

```css
.md-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 14px;
  border-radius: var(--md-radius-md);
  border: 1px solid var(--md-color-border-subtle);
  font: 600 14px/1 var(--md-font-sans);
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color var(--md-duration-base) var(--md-ease-out),
    border-color     var(--md-duration-base) var(--md-ease-out),
    box-shadow       var(--md-duration-base) var(--md-ease-out);
}

/* Primary：lavender 底 + 白字 */
.md-btn--primary {
  background: var(--md-color-lavender);
  color: white;
  border-color: var(--md-color-lavender);
}
.md-btn--primary:hover {
  background: #5560c8;
  border-color: #5560c8;
}

/* Secondary：白底 + 深字 + 浅边框 */
.md-btn--secondary {
  background: var(--md-color-surface);
  color: var(--md-color-ink);
}
.md-btn--secondary:hover {
  background: var(--md-ink-08);
}

/* Ghost：无底无边框 */
.md-btn--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--md-color-ink);
}

/* Focus：必须有清晰描边，不能只靠颜色 */
.md-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--md-lavender-12), 0 0 0 1px var(--md-color-lavender);
}
```

### 输入框

```css
.md-input {
  width: 100%;
  min-height: 36px;
  border: 1px solid var(--md-color-border-subtle);
  border-radius: var(--md-radius-md);
  padding: 0 var(--md-space-3);
  font: 450 16px/1 var(--md-font-sans);
  color: var(--md-color-ink);
  background: var(--md-color-surface);
  transition: border-color var(--md-duration-fast) var(--md-ease-out),
              box-shadow   var(--md-duration-fast) var(--md-ease-out);
}
.md-input:focus {
  outline: none;
  border-color: var(--md-color-lavender);
  box-shadow: 0 0 0 3px var(--md-lavender-12);
}
.md-input--error {
  border-color: var(--md-color-error);
  background: var(--md-error-12);
}
```

### 卡片 / 面板

```css
.md-card {
  background: var(--md-color-surface);
  border: 1px solid var(--md-color-border-subtle);
  border-radius: var(--md-radius-lg);
  box-shadow: var(--md-shadow-card);
  padding: var(--md-space-5);
}

/* 营销卡片：宽松内边距 */
.md-marketing-card {
  composes: md-card;
  padding: var(--md-space-6);
}

/* 工具面板：紧凑，无额外阴影 */
.md-utility-panel {
  background: var(--md-color-surface);
  border: 1px solid var(--md-color-border-subtle);
  border-radius: var(--md-radius-lg);
  padding: var(--md-space-4);
}
```

### 对话层 / Dialog

```css
.md-dialog {
  background: var(--md-color-surface);
  border: 1px solid var(--md-color-border-subtle);
  border-radius: var(--md-radius-lg);
  box-shadow: var(--md-shadow-dialog);
  padding: var(--md-space-4);
  max-width: 720px;
}

/* 入场动画 */
@keyframes md-dialog-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.md-dialog[data-open] {
  animation: md-dialog-in var(--md-duration-slow) var(--md-ease-dialog) both;
}
```

### Badge

```css
.md-badge {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border-radius: var(--md-radius-pill);
  font: 700 12px/1 var(--md-font-sans);
}
.md-badge--teal   { background: rgba(22,170,152,.12); color: var(--md-color-teal); }
.md-badge--sky    { background: var(--md-sky-16);     color: #1a6fa3; }
.md-badge--yellow { background: rgba(255,222,0,.20);  color: #7a6000; }
.md-badge--coral  { background: rgba(255,113,105,.12);color: #c0302a; }
```

### 数据表格（结果网格）

```css
.md-grid {
  background: var(--md-color-surface);
  border: 1px solid var(--md-color-lavender);
  border-radius: var(--md-radius-md);
  overflow: hidden;
}

.md-grid__toolbar {
  display: flex;
  align-items: center;
  gap: var(--md-space-3);
  min-height: 40px;
  padding: 0 var(--md-space-3);
  border-bottom: 1px solid var(--md-color-border-subtle);
}

.md-table {
  width: 100%;
  border-collapse: collapse;
  font: 450 13px/1.4 var(--md-font-sans);
}

.md-table th,
.md-table td {
  border-right:  1px solid var(--md-color-border-subtle);
  border-bottom: 1px solid var(--md-color-border-subtle);
  padding: 8px 10px;
  text-align: left;
  white-space: nowrap;
}

.md-table th {
  font-weight: 600;
  background: #fafafa;
  position: sticky;
  top: 0;
  z-index: 1;
}

.md-table tr:hover td { background: var(--md-sky-16); }
```

### 错误态

```css
.md-error-block {
  background: var(--md-color-surface);
  border: 1px solid var(--md-color-error);
  border-radius: var(--md-radius-lg);
  padding: var(--md-space-4);
  display: flex;
  align-items: flex-start;
  gap: var(--md-space-3);
}

/* 错误 cell（表格内） */
.md-table td--error {
  outline: 1px solid var(--md-color-error);
  background: var(--md-error-12);
}
```

### 顶部导航

```css
.md-topbar {
  max-width: var(--md-container-max);
  margin: 0 auto;
  min-height: 64px;
  padding: 0 var(--md-space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--md-space-5);
  background: var(--md-color-surface);
  color: var(--md-color-ink);
}

.md-nav a {
  color: var(--md-color-ink);
  text-decoration: none;
  font: 700 12px/1 var(--md-font-sans);
  text-transform: uppercase;
  letter-spacing: .06em;
}

.md-nav a:hover { opacity: .7; }
```

---

## 七、插图风格规范

插图须遵循 MotherDuck 固有画风，不能使用写实图片或复杂渐变图形：

- **描边**：`3px–4px` 深灰 `#383838` 外轮廓，粗描边是品牌辨识核心
- **色块**：高饱和平涂，取自品牌色盘（yellow / coral / sky / teal），无渐变
- **透明背景**：插图不加白色底板，直接叠在 `canvas` 或 `surface` 上
- **动势表达**：使用虚线轨迹、跳动小几何块，不用阴影或动态模糊
- **图形元素**：鸭子 + 数据库桶 + 云 + 代码窗口 + 放大镜组合出现，架构图用大块纯色底 + 垂直引导线
- **图标（产品 UI）**：16~20px 线性/实心结合，描边 1.5px，颜色跟随文本色

---

## 八、无障碍规则

1. **键盘可访问**：所有按钮、输入、下拉、对话层必须支持键盘导航，focus 态清晰可见（不能只靠颜色）
2. **Focus 描边**：focus-visible 使用 `box-shadow` 描边（`lavender-12` + 1px solid），不依赖 outline: none 后的颜色微调
3. **图标按钮**：最小触控尺寸 40×40px，必须有 `aria-label`
4. **减弱动效**：`@media (prefers-reduced-motion: reduce)` 下去掉位移动画，仅保留透明度或完全禁用
5. **关键信息**：不能只靠插图传达关键内容，文字和结构必须完整表达含义

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

---

## 九、响应式断点

精确断点未公开，以下为复刻建议：

| 名称 | 值 | 说明 |
|---|---:|---|
| sm | 640px | 小屏手机横屏 |
| md | 768px | 平板竖屏 |
| lg | 1024px | 平板横屏 / 小桌面 |
| xl | 1280px | 标准桌面 |

**营销页**：lg+ 用 12 列；md 用 8 列；sm- 单列堆叠，CTA 放首屏首位。
**工具页**：lg- 折叠右侧 Column Explorer 为抽屉；md- 折叠左侧对象树为隐藏侧栏。

---

## 十、动效规范（复刻建议）

| 场景 | 参数 |
|---|---|
| 按钮 hover | `160ms ease-out`，背景略深，边框略增强，无位移 |
| 输入/面板 focus | `120ms ease-out`，边框切 lavender，外圈 shadow |
| Dialog 入场 | `200ms cubic-bezier(.2,.8,.2,1)`，透明度 0→1 + translateY(6px→0) |
| Drawer / Sidebar 滑入 | `200ms ease`，水平滑入 |
| 表格行 hover | `100ms ease-out`，浅色底，无位移 |

---

*本规范基于 MotherDuck 官网公开页面观测与像素采样整理，颜色 token 为直接可观察值，其余 token 为保守复刻建议，应用时以视觉走查为准。*
