import {type ReactNode, useMemo, useState} from 'react';
import {type ThemeType, Theme, ThemeContext} from './ThemeContext';


const defaultTheme = Theme.Dark;


type ThemeProviderProps = {
  children: ReactNode
};


const ThemeProvider = (props: ThemeProviderProps) => {

  const {children} = props;

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

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
