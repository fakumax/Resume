import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { PROJECTS, type Project } from '@/data/content';
import type { Strings } from '@/i18n/strings';
import type { ThemePalette } from '@/styles/theme';
import './Projects.css';

const AUTOPLAY_MS = 5000;
const TRANSITION_MS = 700;

interface ProjectCardProps {
  project: Project;
  colors: ThemePalette;
  t: Strings;
  lang: 'es' | 'en';
}

const ProjectCard = ({ project, colors, t, lang }: ProjectCardProps) => {
  const isLive = project.status === 'live';
  const href = project.deploymentUrl ?? project.repoUrl;

  return (
    <div className="project-card" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
      <div
        className="project-thumb"
        style={{
          background: `linear-gradient(135deg, ${colors.accent}33, ${colors.bgAlt})`,
          color: colors.accent,
        }}
      >
        {project.key}
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <div className="project-title" style={{ color: colors.text }}>
            {project.key}
          </div>
          <div className="project-badge" style={{ color: colors.textFaint, borderColor: colors.border }}>
            {isLive ? t.live : t.repoOnly}
          </div>
        </div>
        <div className="project-desc" style={{ color: colors.textDim }}>
          {lang === 'es' ? project.descEs : project.descEn}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ color: colors.accent, '--link-hover-color': colors.accent } as CSSProperties}
        >
          {t.ctaProject}
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const colors = useThemeColors();
  const { t, lang } = useLanguage();

  const slides = [PROJECTS[PROJECTS.length - 1], ...PROJECTS, PROJECTS[0]];
  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const intervalRef = useRef<number | undefined>(undefined);

  const restartAutoplay = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setWithTransition(true);
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  // Re-enable the transition on the next frame after an instant loop-reset snap.
  useEffect(() => {
    if (withTransition) return;
    const raf = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(raf);
  }, [withTransition]);

  const handlePrev = () => {
    setWithTransition(true);
    setIndex((i) => i - 1);
    restartAutoplay();
  };

  const handleNext = () => {
    setWithTransition(true);
    setIndex((i) => i + 1);
    restartAutoplay();
  };

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setWithTransition(false);
      setIndex(1);
    } else if (index === 0) {
      setWithTransition(false);
      setIndex(slides.length - 2);
    }
  };

  return (
    <section id="projects" className="projects" style={{ backgroundColor: colors.bg }}>
      <div className="projects-inner">
        <div className="projects-heading" style={{ color: colors.text }}>
          {t.sectionProjects}
        </div>
        <div className="projects-carousel">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            style={{ color: colors.text, borderColor: colors.border, backgroundColor: colors.card }}
            onClick={handlePrev}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          <div className="projects-viewport">
            <div
              className="projects-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : 'none',
              }}
            >
              {slides.map((project, i) => (
                <div className="carousel-slide" key={`${project.key}-${i}`}>
                  <ProjectCard project={project} colors={colors} t={t} lang={lang} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            style={{ color: colors.text, borderColor: colors.border, backgroundColor: colors.card }}
            onClick={handleNext}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
