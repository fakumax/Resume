export interface Project {
  key: string;
  descEs: string;
  descEn: string;
  tech: string[];
  screenshot?: string;
  deploymentUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    key: 'Pokemon App',
    descEs: 'Aplicación full-stack para crear, buscar y explorar Pokémon con datos de la PokéAPI.',
    descEn: 'Full-stack app to create, search and browse Pokémon with data from the PokéAPI.',
    tech: ['React', 'React Query', 'Fastify', 'Prisma'],
    screenshot: '/projects/pokemon-app.jpg',
    deploymentUrl: 'https://pokemon-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Pokemon_App',
  },
  {
    key: 'Videogames App',
    descEs: 'Catálogo y buscador de videojuegos con filtros avanzados y paginación del lado del servidor.',
    descEn: 'Video game catalog and search app with advanced filtering and server-side pagination.',
    tech: ['React', 'Redux', 'Express', 'PostgreSQL'],
    screenshot: '/projects/videogames-app.jpg',
    deploymentUrl: 'https://videogames-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Videogames_App',
  },
  {
    key: 'PizzaMago',
    descEs: 'Menú de pizzería moderno con carrito de compras y armador de pizza personalizada paso a paso.',
    descEn: 'Modern pizzeria web app featuring a pizza menu, cart experience, and step-by-step custom pizza builder.',
    tech: ['React', 'Next.js', 'TailwindCSS'],
    screenshot: '/projects/pizzeria-app.jpg',
    deploymentUrl: 'https://pizzeria-app-lac.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Pizzeria_App',
  },
  {
    key: 'CalendApp',
    descEs: 'Agenda de turnos estilo Calendly: compartís tu link y tus invitados eligen un horario libre, sin ida y vuelta de mensajes.',
    descEn: 'Calendly-style scheduling app: share your link and invitees pick an open time slot, no back-and-forth messaging.',
    tech: ['Next.js', 'Prisma', 'TailwindCSS', 'TypeScript'],
    screenshot: '/projects/calend-app.jpg',
    deploymentUrl: 'https://calend-app-iota.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Calend_App',
  },
  {
    key: 'Bosque Encantado',
    descEs: 'Invitación digital interactiva con formato de cuento animado: detalles del evento, cuenta regresiva, código de vestimenta, regalos y confirmación de asistencia.',
    descEn: 'Interactive digital invitation designed as an animated storybook experience with event details, countdown, dress code, gifts, and RSVP.',
    tech: ['React', 'Vite', 'SCSS', 'TailwindCSS'],
    screenshot: '/projects/bosque-encantado.jpg',
    deploymentUrl: 'https://bosque-encantado-tau.vercel.app/',
    repoUrl: 'https://github.com/fakumax/bosqueEncantado',
  },
  {
    key: 'Menu App',
    descEs: 'Menú digital mobile-first: el cliente arma su pedido y lo envía directo al local por WhatsApp.',
    descEn: 'Mobile-first digital menu where customers customize their order and send it to the venue via WhatsApp.',
    tech: ['React', 'Vite', 'TypeScript', 'WhatsApp API'],
    screenshot: '/projects/menu-app.jpg',
    deploymentUrl: 'https://menu-app-ruddy.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Menu_App',
  },
  {
    key: 'HotelFlow',
    descEs: 'Reservas para un resort: búsqueda, filtros y reserva de habitaciones, más un panel de administración.',
    descEn: 'Hotel resort booking app with search, filter and book rooms, plus an admin panel.',
    tech: ['React', 'Next.js', 'TailwindCSS'],
    screenshot: '/projects/hotelflow-app.jpg',
    deploymentUrl: 'https://hotel-flow-app-hazel.vercel.app/',
    repoUrl: 'https://github.com/fakumax/HotelFlow_App',
  },
  {
    key: 'Ecommerce App',
    descEs: 'E-commerce con catálogo de productos, carrito, checkout simulado y tema visual personalizable en vivo.',
    descEn: 'Ecommerce app with product catalog, cart, mock checkout and a live customizable theme.',
    tech: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    deploymentUrl: 'https://ecommerce-app-fakumax.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Ecommerce_App',
  },
  {
    key: 'PsiDuelo',
    descEs: 'Sitio de acompañamiento psicológico en duelo: contención emocional, atención online y recursos de reflexión.',
    descEn: 'Psychology website focused on grief support, emotional guidance, online care, and reflective resources.',
    tech: ['React', 'Next.js', 'Styled Components', 'Prismic'],
    screenshot: '/projects/psiduelo.jpg',
    deploymentUrl: 'https://psiduelo.vercel.app/',
    repoUrl: 'https://github.com/fakumax/psiduelo',
  },
  {
    key: 'Defender la Vida',
    descEs: 'Sitio para una asociación civil de prevención del suicidio: información de contacto de emergencia, recursos y formas de ayudar.',
    descEn: 'Site for a nonprofit dedicated to suicide prevention: emergency contact info, resources and ways to help.',
    tech: ['Astro'],
    screenshot: '/projects/defender-la-vida.jpg',
    deploymentUrl: 'https://defender-la-vida.vercel.app/',
    repoUrl: 'https://github.com/fakumax/Defender-la-vida',
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
  email: `mailto:${import.meta.env.PUBLIC_EMAIL}`,
  github: 'https://github.com/fakumax/',
  linkedin: 'https://www.linkedin.com/in/fakumax/',
  whatsapp: `https://api.whatsapp.com/send?phone=${import.meta.env.PUBLIC_WHATSAPP_PHONE}&text=Hola!`,
  telegram: `https://t.me/${import.meta.env.PUBLIC_TELEGRAM_USERNAME}`,
  cv: {
    es: import.meta.env.PUBLIC_CV_URL_ES,
    en: import.meta.env.PUBLIC_CV_URL_EN,
  },
};
