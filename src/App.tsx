import { ColorModeProvider } from '@/hooks/ColorModeProvider';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Lang } from '@/i18n/languageContext';
import Hero from '@components/Hero/Hero';
import Experience from '@components/Experience/Experience';
import Projects from '@components/Projects/Projects';
import Contact from '@components/Contact/Contact';
import './App.css';

interface AppProps {
  lang: Lang;
  altLangHref: string;
}

export const App = ({ lang, altLangHref }: AppProps) => {
  return (
    <ColorModeProvider>
      <LanguageProvider lang={lang}>
        <div className="app-shell">
          <Hero altLangHref={altLangHref} />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </LanguageProvider>
    </ColorModeProvider>
  );
};
