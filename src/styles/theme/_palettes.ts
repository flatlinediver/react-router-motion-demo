import { IThemeMode } from '@context/theme-mode';
import _baseColors from './_base-colors.json';

export const _palettes: Record<
  IThemeMode['mode'],
  {
    text: string;
    bg: string;
    link: string;
  }
> = {
  light: {
    text: _baseColors.grey[400],
    bg: _baseColors.grey[100],
    link: _baseColors.accent.dark,
  },
  dark: {
    text: _baseColors.grey[200],
    bg: _baseColors.grey[600],
    link: _baseColors.accent.light,
  },
} as const;
