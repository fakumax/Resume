import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import './index.css';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>
);
