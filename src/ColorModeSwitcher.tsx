import * as React from 'react';
import { useColorMode, useColorModeValue } from './hooks/useColorMode';
import { FiMoon, FiSun } from 'react-icons/fi';
import './ColorModeSwitcher.css';

type ColorModeSwitcherProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <button
      type="button"
      className="color-mode-switcher"
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >
      {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};
