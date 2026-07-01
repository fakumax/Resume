import { useContext } from 'react';
import { ColorModeContext, type ColorModeContextValue } from './colorModeContext';

export const useColorMode = (): ColorModeContextValue => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

export const useColorModeValue = <T,>(light: T, dark: T): T => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
};
