import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

const theme = extendTheme({
  colors: {
    primary: '#1C2146',
    secondary: '#FFFFFF',
    tertiary: '#f5be15',
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  breakpoints: {
    xs: '480px',
    // => @media (max-width: 480px) { ... }
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
});

export default theme;
