import { useMemo, type ReactNode } from 'react';
import { LanguageContext, type Lang } from './languageContext';

interface LanguageProviderProps {
  lang: Lang;
  children: ReactNode;
}

export const LanguageProvider = ({ lang, children }: LanguageProviderProps) => {
  const value = useMemo(() => ({ lang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
