import type { CSSProperties } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { CONTACT } from '@/data/content';
import Header from '../Header/Header';
import './Hero.css';

interface HeroProps {
  altLangHref: string;
}

const Hero = ({ altLangHref }: HeroProps) => {
  const colors = useThemeColors();
  const { t, lang } = useLanguage();
  const secondaryBtnStyle = {
    color: colors.text,
    '--border-color': colors.border,
    '--hover-border-color': colors.accent,
  } as CSSProperties;

  return (
    <div id="top" className="hero-shell" style={{ backgroundColor: colors.bg }}>
      <div className="hero-decoration">
        <div
          className="hero-dots"
          style={{ backgroundImage: `radial-gradient(${colors.textFaint} 1.5px, transparent 1.5px)` }}
        />
        <div
          className="hero-glow"
          style={{ background: `radial-gradient(closest-side, ${colors.accent}33, transparent 70%)` }}
        />
      </div>
      <Header altLangHref={altLangHref} />
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title" style={{ color: colors.text }}>
            Facundo Vergara
            <span className="hero-caret" style={{ color: colors.accent }}>
              |
            </span>
          </h1>
          <div className="hero-role" style={{ color: colors.accent }}>
            {t.role}
          </div>
          <p className="hero-about" style={{ color: colors.textDim }}>
            {t.aboutBody}
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
              style={{ backgroundColor: colors.accent, color: colors.bg }}
            >
              {t.heroCta}
            </a>
            <a
              href="#contact"
              className="hero-btn hero-btn-secondary hero-btn-contact"
              style={secondaryBtnStyle}
            >
              {t.heroCta2}
            </a>
            <a
              href={CONTACT.cv[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
              style={secondaryBtnStyle}
            >
              {t.heroCta3}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
