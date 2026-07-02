import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import Hero from '@components/Hero/Hero';
import Experience from '@components/Experience/Experience';
import Projects from '@components/Projects/Projects';
import Contact from '@components/Contact/Contact';
import Loader from '@components/Spinner';
import './App.css';

// Cap the wait in case fonts.ready stalls (offline, blocked fonts).
const FONTS_TIMEOUT_MS = 2000;

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Hold the loader until the webfonts are in, so the layout
    // doesn't visibly shift when they swap.
    Promise.race([
      document.fonts.ready,
      new Promise((resolve) => setTimeout(resolve, FONTS_TIMEOUT_MS)),
    ]).then(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LanguageProvider>
          <div className="app-shell">
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </LanguageProvider>
      )}
    </>
  );
};
