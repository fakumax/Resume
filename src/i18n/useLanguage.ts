import { useContext } from 'react';
import { LanguageContext, type Lang } from './languageContext';
import { STRINGS, type Strings } from './strings';

export const useLanguage = (): { lang: Lang; t: Strings } => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return { lang: context.lang, t: STRINGS[context.lang] };
};
