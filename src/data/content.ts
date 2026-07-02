export interface Project {
  key: string;
  descEs: string;
  descEn: string;
  status: 'live' | 'repo-only';
  tech: string[];
  deploymentUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    key: 'Pokemon App',
    descEs: 'Aplicación full-stack para crear, buscar y explorar Pokémon con datos de la PokéAPI.',
    descEn: 'Full-stack app to create, search and browse Pokémon with data from the PokéAPI.',
    status: 'live',
    tech: ['React', 'React Query', 'Fastify', 'Prisma'],
    deploymentUrl: 'https://pokemon-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Pokemon_App',
  },
  {
    key: 'Videogames App',
    descEs: 'Catálogo y buscador de videojuegos con filtros avanzados y paginación del lado del servidor.',
    descEn: 'Video game catalog and search app with advanced filtering and server-side pagination.',
    status: 'live',
    tech: ['React', 'Redux', 'Express', 'PostgreSQL'],
    deploymentUrl: 'https://videogames-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Videogames_App',
  },
  {
    key: 'Mattresses',
    descEs: 'E-commerce de colchones desarrollado en equipo bajo SCRUM.',
    descEn: 'Mattress e-commerce site built as a team project under SCRUM.',
    status: 'live',
    tech: ['React', 'Redux', 'Node.js', 'Mercado Pago'],
    deploymentUrl: 'https://ecommerce-app-g3.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Ecommerce-App-G3',
  },
  {
    key: 'Pizzeria',
    descEs: 'Sitio web para una pizzería.',
    descEn: 'Website for a pizzeria.',
    status: 'repo-only',
    tech: ['TypeScript', 'CSS'],
    repoUrl: 'https://github.com/fakumax/Pizzeria_App',
  },
];

export interface ExperienceItem {
  roleEs: string;
  roleEn: string;
  company: string;
  periodEs: string;
  periodEn: string;
  descEs: string;
  descEn: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    roleEs: 'Desarrollador SharePoint',
    roleEn: 'SharePoint Developer',
    company: 'Punto IT',
    periodEs: 'Ago 2023 — Presente',
    periodEn: 'Aug 2023 — Present',
    descEs:
      'Proyectos para Pan American Energy: desarrollo SPFx, migraciones de SharePoint On-Premise 2016 a SharePoint Online y automatización con Power Automate y Power Apps.',
    descEn:
      'Projects for Pan American Energy: SPFx development, SharePoint On-Premise 2016 to SharePoint Online migrations, and automation with Power Automate and Power Apps.',
  },
  {
    roleEs: 'Desarrollador SharePoint',
    roleEn: 'SharePoint Developer',
    company: 'Raona',
    periodEs: 'Jul 2024 — Jul 2026',
    periodEn: 'Jul 2024 — Jul 2026',
    descEs:
      'Soluciones empresariales sobre SharePoint Online para YPF: web parts SPFx con React y TypeScript, formularios personalizados, permisos por rol y automatización de procesos con Power Automate.',
    descEn:
      'Enterprise solutions on SharePoint Online for YPF: SPFx web parts with React and TypeScript, custom forms, role-based permissions and process automation with Power Automate.',
  },
  {
    roleEs: 'Desarrollador Full Stack',
    roleEn: 'Full Stack Developer',
    company: 'Enérgica City',
    periodEs: 'Sep 2021 — Jun 2023',
    periodEn: 'Sep 2021 — Jun 2023',
    descEs:
      'Desarrollo de aplicaciones web y móviles con React, Next.js y Gatsby, desplegadas en AWS con arquitectura serverless.',
    descEn:
      'Web and mobile application development with React, Next.js and Gatsby, deployed on AWS with serverless architecture.',
  },
  {
    roleEs: 'Desarrollador Full Stack',
    roleEn: 'Full Stack Developer',
    company: 'Henry',
    periodEs: 'Mar 2021 — Jul 2021',
    periodEn: 'Mar 2021 — Jul 2021',
    descEs:
      'Proyectos integradores del bootcamp: e-commerce en equipo con React, Redux, Node y PostgreSQL bajo SCRUM, y una app de videojuegos consumiendo APIs externas.',
    descEn:
      'Bootcamp capstone projects: team e-commerce with React, Redux, Node and PostgreSQL under SCRUM, and a video game app consuming external APIs.',
  },
];

export const CONTACT = {
  github: 'https://github.com/fakumax/',
  linkedin: 'https://www.linkedin.com/in/fakumax/',
  whatsapp: `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_WHATSAPP_PHONE}&text=Hola!`,
  telegram: `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}`,
  cv: {
    es: import.meta.env.VITE_CV_URL_ES,
    en: import.meta.env.VITE_CV_URL_EN,
  },
};
