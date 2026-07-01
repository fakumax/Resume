import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ColorModeContext, getInitialColorMode, type ColorMode, STORAGE_KEY } from './colorModeContext';
import { themes } from '@/styles/theme';

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
    document.body.style.backgroundColor = themes[colorMode].bg;
    window.localStorage.setItem(STORAGE_KEY, colorMode);
  }, [colorMode]);

  const toggleColorMode = useCallback(() => {
    setColorMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ colorMode, toggleColorMode }), [colorMode, toggleColorMode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};
