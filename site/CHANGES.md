# Changelog

## 2026-06-09 — MotherDuck 风格重构

将 `site/` 整体视觉风格从 **Neobrutalism**（粗黑边框 + 锐角 + translate-shadow 悬浮）切换为 **MotherDuck** 风格（暖白表面 + 轻边框 + lavender 主色 + 圆角 + 精致阴影）。

### 修改文件

| 文件 | 变化 |
|---|---|
| `site/src/styles/design-tokens.css` | 新增 lavender / coral / navy / border-subtle / error 颜色 token；新增 radius-sm/md/lg/pill；新增 shadow-card/shadow-dialog；更新容器宽度 1600px → 1280px；更新字体栈为 system-ui；更新动效参数 |
| `site/src/styles/global.css` | 全面重写组件类：卡片、按钮、section、badge、输入框、错误块；去除标题全大写；调整 section 分隔线为轻边框 |
| `site/tailwind.config.js` | 新增 lavender / coral / navy / borderSubtle / error 颜色；radius 扩展为 xs/sm/md/lg/pill；新增 shadow-card/dialog；容器最大宽度 1280px；字体改为 system-ui 栈 |
| `site/src/components/layout/Navigation.tsx` | 导航背景白色替换黄色；边框改为 1px 轻边框；高度 90px → 64px；移除 logo 黑边框和 translate 悬浮 |
| `site/src/components/ui/Hero.tsx` | 移除文字阴影；移除渐变模糊圆球装饰；背景改为暖白 canvas；标题去掉 uppercase；新增可选 eyebrow prop |
| `site/src/components/layout/Footer.tsx` | 边框从 2px black → 1px #DADADA；移除品牌名渐变文字裁切；分区标题改为 eyebrow 风格 |
| `site/src/components/projects/ProjectCard.tsx` | 预览图区背景从 sky-teal 渐变改为 canvas/lavender 轻底；hover 颜色 sky → lavender；CTA 颜色同步 |
| `site/src/styles/presentations.css` | `--shadow-lg`（未定义）→ `--shadow-dialog` |

### 视觉变化对照

| 元素 | 之前（Neobrutalism） | 之后（MotherDuck） |
|---|---|---|
| 卡片边框 | `2px solid #000` | `1px solid #DADADA` |
| 卡片圆角 | `2px` | `12px` |
| 卡片悬浮 | `translate(2px,-2px) + box-shadow black` | `translateY(-2px) + shadow-dialog` |
| 主按钮 | sky 蓝底 + 黑边框 + 全大写 | lavender `#6670D6` 底 + 白字 |
| 次要按钮 | cream 底 + 黑边框 | 白底 + `#DADADA` 边框 |
| 导航背景 | `#E3C300` 深黄 | `#FFFFFF` 白 |
| 导航高度 | 90px | 64px |
| 标题样式 | 全大写 + 宽字距 `0.06em` | 正常大小写 + 负字距 `-0.02em` |
| Hero 背景 | 黄蓝渐变 + 模糊球 + 文字阴影 | 暖白 canvas 底色 + 干净排版 |
| 页脚边框 | `2px solid #000` | `1px solid #DADADA` |
| 主强调色 | sky `#6FC2FF` | lavender `#6670D6` |
| 容器最大宽 | 1600px | 1280px |
| 字体栈 | Aeonik Mono（自定义） | `system-ui`（系统字体） |
| section 分隔 | `2px solid #000` | `1px solid #DADADA` |
| badge 形状 | 锐角矩形 + 黑边框 | 胶囊形 `border-radius: 999px` |
| 输入框焦点 | `border: sky-strong` | `border: lavender + shadow-ring` |

### 设计规范参考

`.claude/rules/style.md` — MotherDuck 视觉风格设计规范（颜色采样值、排版、组件、无障碍规则）
