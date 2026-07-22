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
    role: 'Software Engineer | Desarrollo web y automatización',
    sectionExperience: 'Experiencia laboral',
    sectionProjects: 'Proyectos',
    sectionContact: 'Contacto',
    heroCta: 'Ver proyectos',
    heroCta2: 'Contactarme',
    heroCta3: 'Descargar CV',
    aboutBody:
      'Desarrollo sitios web, tiendas online, sistemas de reservas, menús digitales, automatizaciones y aplicaciones a medida. También creo soluciones empresariales con SharePoint Online, Microsoft 365, React y TypeScript.',
    contactIntro: '¿Tenés una idea o necesitás una solución digital? Escribime.',
    ctaProject: 'Ver proyecto',
    footerBuilt: 'Diseñado y desarrollado por Facundo Vergara',
    langBtn: 'EN',
  },
  en: {
    brand: 'fakumax',
    role: 'Software Engineer | Web development & automation',
    sectionExperience: 'Work Experience',
    sectionProjects: 'Projects',
    sectionContact: 'Contact',
    heroCta: 'View projects',
    heroCta2: 'Get in touch',
    heroCta3: 'Download CV',
    aboutBody:
      'I build websites, online stores, booking systems, digital menus, automations and custom web applications. I also deliver enterprise solutions with SharePoint Online, Microsoft 365, React and TypeScript.',
    contactIntro: 'Have an idea or need a digital solution? Reach out.',
    ctaProject: 'View project',
    footerBuilt: 'Designed & built by Facundo Vergara',
    langBtn: 'ES',
  },
};
