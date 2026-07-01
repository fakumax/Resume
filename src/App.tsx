import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import Hero from '@components/Hero/Hero';
import Experience from '@components/Experience/Experience';
import Projects from '@components/Projects/Projects';
import Contact from '@components/Contact/Contact';
import Loader from '@components/Spinner';
import './App.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el loader después de 1 segundo
    }, 1000); // 1000 milisegundos = 1 segundo

    return () => clearTimeout(timer); // Cancela el temporizador cuando el componente se desmonte
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
