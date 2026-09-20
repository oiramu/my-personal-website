import { useTheme } from './ThemeContext';

export const useThemedAsset = (lightAsset, darkAsset) => {
  const { theme } = useTheme();
  return theme === 'light' ? lightAsset : darkAsset;
};
