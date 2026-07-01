import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, getInitialLanguage, type Lang, STORAGE_KEY } from './languageContext';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'es' ? 'en' : 'es'));
  }, []);

  const value = useMemo(() => ({ lang, toggleLanguage }), [lang, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
