/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAIL: string;
  readonly PUBLIC_WHATSAPP_PHONE: string;
  readonly PUBLIC_TELEGRAM_USERNAME: string;
  readonly PUBLIC_CV_URL_ES: string;
  readonly PUBLIC_CV_URL_EN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
