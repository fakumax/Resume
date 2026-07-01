import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { ColorModeProvider } from './hooks/ColorModeProvider';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <ColorModeProvider>
    <App />
  </ColorModeProvider>
);
