import { createContext } from 'react';

export type Lang = 'es' | 'en';

export interface LanguageContextValue {
  lang: Lang;
  toggleLanguage: () => void;
}

export const STORAGE_KEY = 'language';

export const getInitialLanguage = (): Lang => {
  if (typeof window === 'undefined') return 'es';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;

  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return nav === 'en' ? 'en' : 'es';
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
