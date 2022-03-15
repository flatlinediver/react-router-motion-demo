import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { detectUserColorScheme } from '@utils/detect-user-color-scheme';
import { _palettes } from './_palettes';
import baseColors from './_base-colors.json';

export const theme = (mode: keyof typeof _palettes = detectUserColorScheme()) => ({
  palette: _palettes[mode],
  mode,
  baseColors,
  transition: (p: string, t?: string) => `${p} cubic-bezier(0, 0, 0.2, 1) ${t ?? `600ms`}`,
});

export const useTheme = () => useContext(ThemeContext);
