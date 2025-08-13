import {type ReactNode, useMemo, useState} from 'react';
import {type ThemeType, DEFAULT_THEME} from '../../constants/constants.ts';
import { ThemeContext } from './ThemeContext.ts';


type ThemeProviderProps = {
  children: ReactNode
};


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
