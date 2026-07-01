export interface Project {
  key: string;
  descEs: string;
  descEn: string;
  status: 'live' | 'repo-only';
  deploymentUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    key: 'Pokemon App',
    descEs: 'Aplicación web para explorar información de Pokémon.',
    descEn: 'Web app to explore Pokémon data.',
    status: 'live',
    deploymentUrl: 'https://pokemon-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Pokemon_App',
  },
  {
    key: 'Videogames App',
    descEs: 'Catálogo y buscador de videojuegos.',
    descEn: 'Video game catalog and search app.',
    status: 'live',
    deploymentUrl: 'https://videogames-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Videogames_App',
  },
  {
    key: 'Mattresses',
    descEs: 'E-commerce de colchones desarrollado en equipo.',
    descEn: 'Mattress e-commerce site built as a team project.',
    status: 'live',
    deploymentUrl: 'https://ecommerce-app-g3.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Ecommerce-App-G3',
  },
  {
    key: 'Pizzeria',
    descEs: 'Sitio web para una pizzería.',
    descEn: 'Website for a pizzeria.',
    status: 'repo-only',
    repoUrl: 'https://github.com/fakumax/Pizzeria_App',
  },
];

export interface ExperienceItem {
  roleEs: string;
  roleEn: string;
  company: string;
  period: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  { roleEs: '[ Puesto ]', roleEn: '[ Role ]', company: '[ Empresa ]', period: '[ 2024 — Presente ]' },
  {
    roleEs: '[ Puesto ]',
    roleEn: '[ Role ]',
    company: '[ Empresa anterior ]',
    period: '[ 2022 — 2024 ]',
  },
];

export const CONTACT = {
  github: 'https://github.com/fakumax/',
  linkedin: 'https://www.linkedin.com/in/fakumax/',
  whatsapp: `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_WHATSAPP_PHONE}&text=Hola!`,
  telegram: `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}`,
  cv: import.meta.env.VITE_CV_URL,
};
