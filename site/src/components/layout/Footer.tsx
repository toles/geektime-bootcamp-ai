import { Github } from 'lucide-react';
import { getUrl } from '../../utils/url';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    课程: [
      { label: '课程大纲', href: 'curriculum' },
      { label: '工具生态', href: 'tools' },
      { label: '实战项目', href: 'projects' },
      { label: '学习资料', href: 'materials' },
    ],
    资料: [
      { label: 'Claude Code 架构', href: 'materials/claude-code-architecture' },
      { label: '工具对比', href: 'materials/ai-coding-tools-comparison' },
      { label: 'NotebookLM', href: 'materials/notebooklm-guide' },
    ],
    关于: [
      { label: '课程价值', href: 'about#value' },
      { label: '适合人群', href: 'about#audience' },
      { label: '讲师介绍', href: 'about#instructor' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tyrchen/geektime-bootcamp-ai', label: 'GitHub' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--md-surface)',
        borderTop: 'var(--border-subtle)',
        marginTop: 0,
      }}
    >
      <div className="py-12 md-container">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p
              className="font-bold mb-3"
              style={{ color: 'var(--md-ink)', fontSize: '16px', letterSpacing: '-0.01em' }}
            >
              陈天 AI 训练营
            </p>
            <p className="mb-5 text-sm" style={{ color: 'var(--md-slate)', lineHeight: '1.6' }}>
              让 AI 成为你的编程超能力
            </p>
            <span className="md-badge">✨ 8周精通 AI 编程</span>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: 'var(--md-ink)', letterSpacing: '0.06em' }}
              >
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={getUrl(link.href)}
                      className="text-sm transition-colors duration-150 hover:text-lavender"
                      style={{ color: 'var(--md-slate)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col gap-6 items-center pt-8 md:flex-row md:justify-between"
          style={{ borderTop: 'var(--border-subtle)' }}
        >
          <p className="text-xs" style={{ color: 'var(--md-slate)' }}>
            © {currentYear} 陈天极客时间 AI 训练营 • All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md transition-colors duration-150"
                  style={{ color: 'var(--md-slate)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--md-ink-08)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
