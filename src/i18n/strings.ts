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
  contactIntro: string;
  ctaProject: string;
  footerBuilt: string;
  langBtn: string;
}

export const STRINGS: Record<Lang, Strings> = {
  es: {
    brand: 'fakumax',
    role: 'Software Engineer',
    sectionExperience: 'Experiencia laboral',
    sectionProjects: 'Proyectos',
    sectionContact: 'Contacto',
    heroCta: 'Ver proyectos',
    heroCta2: 'Contactarme',
    heroCta3: 'Descargar CV',
    aboutBody:
      'Software Engineer especializado en soluciones empresariales sobre SharePoint Online y Microsoft 365, con experiencia en SPFx, React, TypeScript, Power Automate y Power Apps. Me enfoco en soluciones escalables, automatización de procesos y mejora de la experiencia de usuario.',
    contactIntro: '¿Tenés un proyecto en mente? Escribime.',
    ctaProject: 'Ver proyecto',
    footerBuilt: 'Diseñado y desarrollado por Facundo Vergara',
    langBtn: 'EN',
  },
  en: {
    brand: 'fakumax',
    role: 'Software Engineer',
    sectionExperience: 'Work Experience',
    sectionProjects: 'Projects',
    sectionContact: 'Contact',
    heroCta: 'View projects',
    heroCta2: 'Get in touch',
    heroCta3: 'Download CV',
    aboutBody:
      'Software Engineer specialized in enterprise solutions on SharePoint Online and Microsoft 365, experienced with SPFx, React, TypeScript, Power Automate and Power Apps. I focus on scalable solutions, process automation and improving user experience.',
    contactIntro: 'Have a project in mind? Reach out.',
    ctaProject: 'View project',
    footerBuilt: 'Designed & built by Facundo Vergara',
    langBtn: 'ES',
  },
};
