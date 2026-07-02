/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_PHONE: string;
  readonly VITE_TELEGRAM_USERNAME: string;
  readonly VITE_CV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
