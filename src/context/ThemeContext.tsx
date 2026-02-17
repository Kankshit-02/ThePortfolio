'use client';

import { createContext, useCallback, useEffect, useState, type ReactNode } from 'react';

export type Mode = 'dev' | 'music';

interface ThemeContextType {
  mode: Mode;
  toggleMode: () => void;
  isTransitioning: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dev',
  toggleMode: () => {},
  isTransitioning: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('dev');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('kankshit-mode') as Mode | null;
    if (stored === 'dev' || stored === 'music') {
      setMode(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-mode', mode);
      localStorage.setItem('kankshit-mode', mode);
    }
  }, [mode, mounted]);

  const toggleMode = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMode((prev) => (prev === 'dev' ? 'music' : 'dev'));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 100);
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ mode: 'dev', toggleMode, isTransitioning: false }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}
