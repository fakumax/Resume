import { createContext } from 'react';

export type Lang = 'es' | 'en';

export interface LanguageContextValue {
  lang: Lang;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
