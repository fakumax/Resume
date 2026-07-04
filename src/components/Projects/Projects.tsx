import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { PROJECTS, type Project } from '@/data/content';
import type { Strings } from '@/i18n/strings';
import type { ThemePalette } from '@/styles/theme';
import './Projects.css';

const AUTOPLAY_MS = 5000;
const STAR_COUNT = 36;

const METEORS = [
  { left: 12, top: 4, delay: 0 },
  { left: 48, top: 0, delay: 4.5 },
  { left: 80, top: 8, delay: 9 },
];

interface Star {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

const makeStars = (): Star[] =>
  Array.from({ length: STAR_COUNT }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 1.4 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 3,
  }));

const StarrySky = () => {
  const stars = useMemo(() => makeStars(), []);

  return (
    <div className="projects-sky" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={i}
          className="sky-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {METEORS.map((meteor, i) => (
        <span
          key={i}
          className="sky-meteor"
          style={{ left: `${meteor.left}%`, top: `${meteor.top}%`, animationDelay: `${meteor.delay}s` }}
        />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  colors: ThemePalette;
  t: Strings;
  lang: 'es' | 'en';
  onExpand: (project: Project) => void;
}

const ProjectCard = ({ project, colors, t, lang, onExpand }: ProjectCardProps) => {
  const href = project.deploymentUrl ?? project.repoUrl;

  return (
    <div className="project-card" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
      {project.screenshot ? (
        <div className="project-thumb project-thumb-image">
          <img src={project.screenshot} alt={project.key} loading="lazy" />
          <button
            type="button"
            className="project-thumb-expand"
            onClick={() => onExpand(project)}
            aria-label={`${t.ctaProject}: ${project.key}`}
          >
            <FiMaximize2 />
          </button>
        </div>
      ) : (
        <div
          className="project-thumb"
          style={{
            background: `linear-gradient(135deg, ${colors.accent}33, ${colors.bgAlt})`,
            color: colors.accent,
          }}
        >
          {project.key}
        </div>
      )}
      <div className="project-body">
        <div className="project-title" style={{ color: colors.text }}>
          {project.key}
        </div>
        <div className="project-desc" style={{ color: colors.textDim }}>
          {lang === 'es' ? project.descEs : project.descEn}
        </div>
        <div className="project-tags">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="project-tag"
              style={{ color: colors.accent, backgroundColor: `${colors.accent}1a` }}
            >
              {tech}
            </span>
          ))}
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

interface LightboxProps {
  project: Project;
  colors: ThemePalette;
  onClose: () => void;
}

const Lightbox = ({ project, colors, onClose }: LightboxProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button
        type="button"
        className="lightbox-close"
        style={{ color: colors.text, backgroundColor: colors.card }}
        onClick={onClose}
        aria-label="Close"
      >
        <FiX />
      </button>
      <img
        src={project.screenshot}
        alt={project.key}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const Projects = () => {
  const colors = useThemeColors();
  const { t, lang } = useLanguage();
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false }),
  ]);

  const handlePrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    emblaApi.plugins().autoplay?.reset();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    emblaApi.plugins().autoplay?.reset();
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="projects"
      style={
        {
          backgroundColor: colors.bg,
          '--star-color': colors.textFaint,
          '--meteor-color': colors.accent,
        } as CSSProperties
      }
    >
      <StarrySky />
      <div className="projects-inner">
        <div className="projects-heading" style={{ color: colors.text }}>
          {t.sectionProjects}
        </div>
        <div className="projects-carousel">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            style={{ color: colors.textDim, '--arrow-hover-color': colors.accent } as CSSProperties}
            onClick={handlePrev}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          <div className="projects-viewport" ref={emblaRef}>
            <div className="projects-track">
              {PROJECTS.map((project) => (
                <div className="carousel-slide" key={project.key}>
                  <ProjectCard
                    project={project}
                    colors={colors}
                    t={t}
                    lang={lang}
                    onExpand={setLightboxProject}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            style={{ color: colors.textDim, '--arrow-hover-color': colors.accent } as CSSProperties}
            onClick={handleNext}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {lightboxProject && (
        <Lightbox project={lightboxProject} colors={colors} onClose={() => setLightboxProject(null)} />
      )}
    </section>
  );
};

export default Projects;
