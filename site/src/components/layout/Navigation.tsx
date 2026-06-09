import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { getUrl } from '../../utils/url';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{
        backgroundColor: 'var(--md-surface)',
        borderBottom: 'var(--border-subtle)',
        boxShadow: '0 1px 0 var(--md-border-subtle)',
      }}
    >
      <div className="md-container">
        <div
          className="flex justify-between items-center"
          style={{ height: 'var(--header-desktop)', minHeight: 'var(--header-desktop)' }}
        >
          {/* 品牌标识 */}
          <a
            href={getUrl('')}
            className="font-bold transition-colors duration-150 hover:opacity-80"
            style={{ color: 'var(--md-ink)', fontSize: '16px', letterSpacing: '-0.01em' }}
          >
            陈天 AI 训练营
          </a>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-colors duration-150 hover:bg-[var(--md-ink-08)]"
                style={{ color: 'var(--md-ink)', letterSpacing: '0.06em' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 移动端汉堡按钮 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md md:hidden transition-colors duration-150 hover:bg-[var(--md-ink-08)]"
            style={{ color: 'var(--md-ink)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden fixed inset-x-0 transition-all duration-200 ${isOpen ? 'opacity-100 top-[var(--header-desktop)]' : 'top-0 opacity-0 pointer-events-none'}`}
        style={{
          backgroundColor: 'var(--md-surface)',
          borderTop: 'var(--border-subtle)',
          boxShadow: 'var(--shadow-dialog)',
        }}
      >
        <div className="flex flex-col md-container gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-widest transition-colors duration-150 hover:bg-[var(--md-ink-08)]"
              style={{ color: 'var(--md-ink)', letterSpacing: '0.06em' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
