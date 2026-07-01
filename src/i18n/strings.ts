import type { Lang } from './languageContext';

export interface Strings {
  brand: string;
  role: string;
  sectionExperience: string;
  sectionProjects: string;
  sectionContact: string;
  heroCta: string;
  heroCta2: string;
  heroCta3: string;
  aboutBody: string;
  fillRole: string;
  live: string;
  repoOnly: string;
  contactIntro: string;
  ctaProject: string;
  footerBuilt: string;
  langBtn: string;
}

export const STRINGS: Record<Lang, Strings> = {
  es: {
    brand: 'fakumax',
    role: 'Front-End Developer',
    sectionExperience: 'Experiencia laboral',
    sectionProjects: 'Proyectos',
    sectionContact: 'Contacto',
    heroCta: 'Ver proyectos',
    heroCta2: 'Contactarme',
    heroCta3: 'Descargar CV',
    aboutBody:
      'Soy desarrollador frontend, basado en Argentina. Trabajo con React, JavaScript y CSS moderno, con foco en interfaces rápidas y cuidadas al detalle.',
    fillRole: 'Completá con tus responsabilidades y logros principales.',
    live: 'activo',
    repoOnly: 'código',
    contactIntro: '¿Tenés un proyecto en mente? Escribime.',
    ctaProject: 'Ver proyecto',
    footerBuilt: 'Diseñado y desarrollado por Facundo Vergara',
    langBtn: 'EN',
  },
  en: {
    brand: 'fakumax',
    role: 'Front-End Developer',
    sectionExperience: 'Work Experience',
    sectionProjects: 'Projects',
    sectionContact: 'Contact',
    heroCta: 'View projects',
    heroCta2: 'Get in touch',
    heroCta3: 'Download CV',
    aboutBody:
      "I'm a frontend developer based in Argentina. I work with React, JavaScript and modern CSS, focused on fast, detail-oriented interfaces.",
    fillRole: 'Fill in your key responsibilities and achievements.',
    live: 'live',
    repoOnly: 'code',
    contactIntro: 'Have a project in mind? Reach out.',
    ctaProject: 'View project',
    footerBuilt: 'Designed & built by Facundo Vergara',
    langBtn: 'ES',
  },
};
