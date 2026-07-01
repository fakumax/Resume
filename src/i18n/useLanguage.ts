import { useContext } from 'react';
import { LanguageContext, type LanguageContextValue } from './languageContext';
import { STRINGS, type Strings } from './strings';

export const useLanguage = (): LanguageContextValue & { t: Strings } => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return { ...context, t: STRINGS[context.lang] };
};
