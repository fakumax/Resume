import { useColorMode } from './useColorMode';
import { themes, type ThemePalette } from '@/styles/theme';

export const useThemeColors = (): ThemePalette => {
  const { colorMode } = useColorMode();
  return themes[colorMode];
};
