'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import ModeToggle from '@/components/ui/ModeToggle';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const devNavItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'WORK', href: '/work' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

const musicNavItems = [
  { label: 'About', href: '/about' },
  { label: 'Music', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { mode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = mode === 'dev' ? devNavItems : musicNavItems;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled && 'backdrop-blur-md'
        )}
        style={{
          backgroundColor: scrolled
            ? mode === 'dev'
              ? 'rgba(15, 15, 15, 0.85)'
              : 'rgba(250, 247, 242, 0.85)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
        }}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <motion.span
              className="font-display text-xl md:text-2xl font-bold transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
              key={mode}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mode === 'dev' ? 'KANKSHIT' : 'Kankshit'}
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm tracking-wide transition-colors duration-200 hover:text-[var(--accent)] group"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: mode === 'dev' ? "'Satoshi', sans-serif" : "'Source Serif 4', serif",
                  letterSpacing: mode === 'dev' ? '0.1em' : '0.02em',
                  fontWeight: mode === 'dev' ? 600 : 400,
                }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  'w-6 h-px transition-all duration-300',
                  mobileOpen && 'rotate-45 translate-y-[4px]'
                )}
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
              <span
                className={cn(
                  'w-6 h-px transition-all duration-300',
                  mobileOpen && '-rotate-45 -translate-y-[3px]'
                )}
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
