import { LanguageProvider } from '@/i18n/LanguageProvider';
import Hero from '@components/Hero/Hero';
import Experience from '@components/Experience/Experience';
import Projects from '@components/Projects/Projects';
import Contact from '@components/Contact/Contact';
import './App.css';

export const App = () => {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
};
