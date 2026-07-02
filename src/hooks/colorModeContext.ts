import { createContext } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ColorModeContextValue {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

export const STORAGE_KEY = 'color-mode';

export const getInitialColorMode = (): ColorMode => {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  return 'dark';
};

export const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);
