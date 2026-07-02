import type { CSSProperties } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import './Spinner.css';

const Loader = () => {
  const colors = useThemeColors();

  return (
    <div className="spinner-overlay" style={{ backgroundColor: colors.bg }}>
      <div className="spinner" style={{ '--spinner-color': colors.accent } as CSSProperties} />
    </div>
  );
};

export default Loader;
