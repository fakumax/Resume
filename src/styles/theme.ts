import './fonts.css';

export interface ThemePalette {
  bg: string;
  bgAlt: string;
  card: string;
  border: string;
  text: string;
  textDim: string;
  textFaint: string;
  accent: string;
}

export const themes: { dark: ThemePalette; light: ThemePalette } = {
  dark: {
    bg: '#161615',
    bgAlt: '#1d1d1b',
    card: '#1f1f1d',
    border: 'rgba(255, 255, 255, 0.09)',
    text: '#f2f0e8',
    textDim: '#9a988f',
    textFaint: '#8f8d82',
    accent: '#f0c419',
  },
  light: {
    bg: '#faf9f4',
    bgAlt: '#f1efe6',
    card: '#ffffff',
    border: 'rgba(0, 0, 0, 0.09)',
    text: '#1a1a17',
    textDim: '#6b6a63',
    textFaint: '#9a988f',
    accent: '#b8860b',
  },
};

export const fonts = {
  heading: `'JetBrains Mono', monospace`,
  body: `'Inter', sans-serif`,
};
