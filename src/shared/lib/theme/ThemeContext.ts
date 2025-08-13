import {createContext} from 'react';
import type {ThemeType} from '../../constants/constants.ts';


type ThemeContextType = {
  theme?: ThemeType,
  setTheme?: (theme: ThemeType) => void
};


const ThemeContext = createContext<ThemeContextType>({});


export {type ThemeContextType, ThemeContext};
