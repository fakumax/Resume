import * as React from 'react';
import { useColorMode, useColorModeValue } from './hooks/useColorMode';
import { FaMoon, FaSun } from 'react-icons/fa';
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
      {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};
