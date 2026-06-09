import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
  backgroundClass?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  eyebrow,
  children,
  backgroundImage,
}: HeroProps) {
  const sectionStyle: React.CSSProperties = backgroundImage
    ? {
        backgroundImage: `linear-gradient(160deg, rgba(244,239,234,.95) 0%, rgba(244,239,234,.80) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { backgroundColor: 'var(--md-canvas)' };

  return (
    <section
      className="relative flex min-h-[92vh] items-center"
      style={sectionStyle}
    >
      <div
        className="md-container text-center"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2"
              style={{
                fontSize: 'var(--font-eyebrow)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--md-lavender)',
              }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              color: 'var(--md-ink)',
              marginBottom: 'var(--space-6)',
              letterSpacing: '-0.02em',
              lineHeight: 'var(--line-height-hero)',
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl"
              style={{
                color: 'var(--md-slate)',
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: 'var(--space-9)',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md-cta-stack justify-center"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
