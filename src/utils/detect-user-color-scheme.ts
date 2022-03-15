export const detectUserColorScheme = () => {
  if (typeof localStorage !== 'undefined') {
    const lsMode = JSON.parse(localStorage.getItem(`theme-mode`) as string);

    if (lsMode) return lsMode;
  }

  if (typeof window !== 'undefined') {
    if (window?.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches === true) {
      return `dark`;
    }
    if (window?.matchMedia?.(`(prefers-color-scheme: light)`)?.matches === true) {
      return `light`;
    }
  }

  return `dark`;
};
