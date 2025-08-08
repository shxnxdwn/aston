import {type ReactNode, useMemo, useState} from 'react';
import {type ThemeType, Theme, ThemeContext} from './ThemeContext';


type ThemeProviderProps = {
  children: ReactNode
};


const DEFAULT_THEME = Theme.Dark;


const ThemeProvider = (props: ThemeProviderProps) => {

  const {children} = props;

  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  const providerValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;
