# CV / Resume

Personal portfolio built with Vite + React + TypeScript (SWC).

- Plain CSS, dark/light theme persisted in localStorage
- i18n (Spanish / English)
- Deployed on Vercel

## Setup

```bash
pnpm install
cp .env.example .env   # then fill in your real values
pnpm dev
```

## Environment variables

Contact info is injected at build time (see `.env.example`):

| Variable                 | Description                          |
| ------------------------ | ------------------------------------ |
| `VITE_WHATSAPP_PHONE`    | Phone number for the WhatsApp link   |
| `VITE_TELEGRAM_USERNAME` | Telegram username                    |
| `VITE_CV_URL`            | Direct download link for the CV file |

On Vercel, set the same variables in Project Settings → Environment Variables.

## Scripts

- `pnpm dev` — dev server
- `pnpm build` — type-check + production build
- `pnpm lint` — ESLint
- `pnpm preview` — preview the production build
