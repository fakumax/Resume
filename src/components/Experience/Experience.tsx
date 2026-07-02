import type { CSSProperties } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { EXPERIENCE } from '@/data/content';
import './Experience.css';

const Experience = () => {
  const colors = useThemeColors();
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="experience" style={{ backgroundColor: colors.bgAlt }}>
      <div className="experience-inner">
        <div className="experience-heading" style={{ color: colors.text }}>
          {t.sectionExperience}
        </div>
        <div className="experience-grid">
          {EXPERIENCE.map((item) => (
            <div
              key={item.company + item.periodEs}
              className="experience-card"
              style={
                { backgroundColor: colors.card, '--hover-outline-color': `${colors.accent}66` } as CSSProperties
              }
            >
              <div className="experience-period" style={{ color: colors.textFaint }}>
                {lang === 'es' ? item.periodEs : item.periodEn}
              </div>
              <div className="experience-role" style={{ color: colors.text }}>
                {lang === 'es' ? item.roleEs : item.roleEn}
              </div>
              <div className="experience-company" style={{ color: colors.accent }}>
                {item.company}
              </div>
              <div className="experience-desc" style={{ color: colors.textDim }}>
                {lang === 'es' ? item.descEs : item.descEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
