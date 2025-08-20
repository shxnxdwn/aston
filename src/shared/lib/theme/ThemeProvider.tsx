import { type ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext, type ThemeType } from './ThemeContext.ts';

type ThemeProviderProps = {
  children: ReactNode;
};

const DEFAULT_THEME = Theme.Dark;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
