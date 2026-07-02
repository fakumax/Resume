import { useEffect, useState } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import './Header.css';

interface HeaderProps {
  altLangHref: string;
}

const Header = ({ altLangHref }: HeaderProps) => {
  const colors = useThemeColors();
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundColor: scrolled ? colors.bg : 'transparent' }}
    >
      <div className="header-inner">
        <a href="#top" className="header-brand" style={{ color: colors.text }}>
          {t.brand}
          <span style={{ color: colors.accent }}>.dev</span>
        </a>
        <nav className="header-nav">
          <a href="#experience" style={{ color: colors.textDim }}>
            {t.sectionExperience}
          </a>
          <a href="#projects" style={{ color: colors.textDim }}>
            {t.sectionProjects}
          </a>
          <a href="#contact" style={{ color: colors.textDim }}>
            {t.sectionContact}
          </a>
          <a
            href={altLangHref}
            className="header-lang-btn"
            style={{ borderColor: colors.border, color: colors.textDim }}
            hrefLang={lang === 'es' ? 'en' : 'es'}
          >
            {t.langBtn}
          </a>
          <ColorModeSwitcher style={{ color: colors.text, marginLeft: 0 }} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
