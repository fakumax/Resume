# CV / Resume

Personal portfolio built with Astro + React (islands) + TypeScript.

- Statically prerendered per locale (`/` es, `/en/` en) — real HTML for crawlers, no client-only rendering
- Plain CSS, dark/light theme persisted in localStorage
- SEO: meta/OG tags, JSON-LD Person schema, hreflang, sitemap
- Deployed on Vercel

## Setup

```bash
pnpm install
cp .env.example .env   # then fill in your real values
pnpm dev
```

## Environment variables

Contact info is injected at build time (see `.env.example`):

| Variable                   | Description                             |
| -------------------------- | ---------------------------------------- |
| `PUBLIC_EMAIL`              | Contact email (mailto: link)            |
| `PUBLIC_WHATSAPP_PHONE`     | Phone number for the WhatsApp link      |
| `PUBLIC_TELEGRAM_USERNAME`  | Telegram username                       |
| `PUBLIC_CV_URL_ES`          | Direct download link for the Spanish CV |
| `PUBLIC_CV_URL_EN`          | Direct download link for the English CV |

On Vercel, set the same variables in Project Settings → Environment Variables.

## Scripts

- `pnpm dev` — dev server
- `pnpm build` — type-check (`astro check`) + static build
- `pnpm lint` — ESLint (includes `.astro` files)
- `pnpm preview` — preview the production build
