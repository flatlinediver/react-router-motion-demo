import React, { useState, FC } from 'react';
import { createSafeContext } from '@utils/create-safe-context';
import { detectUserColorScheme } from '@utils/detect-user-color-scheme';

export interface IThemeMode {
  mode: 'light' | 'dark';
  toggleMode: (mode?: 'light' | 'dark') => void;
}

const [ThemeMode, Provider] = createSafeContext<IThemeMode>();

export const ThemeModeProvider: FC<{ render: (mode: IThemeMode['mode']) => React.ReactNode }> = ({
  render,
}) => {
  const [mode, setMode] = useState<IThemeMode['mode']>(detectUserColorScheme());
  const THEME_KEY = `theme-mode`;
  const toggleMode = (newMode?: IThemeMode['mode']) => {
    newMode = newMode ?? mode === `light` ? `dark` : `light`;
    localStorage.setItem(THEME_KEY, JSON.stringify(newMode));
    setMode(newMode);
  };

  return (
    <Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {render(mode)}
    </Provider>
  );
};

export const useThemeMode = ThemeMode;
