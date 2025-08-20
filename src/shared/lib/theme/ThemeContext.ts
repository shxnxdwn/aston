import { createContext } from 'react';

type ThemeType = (typeof Theme)[keyof typeof Theme];

type ThemeContextType = {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
};

const Theme = {
  Dark: 'theme-dark',
  Light: 'theme-light'
} as const;

const ThemeContext = createContext<ThemeContextType>({});

export type { ThemeType, ThemeContextType };
export { Theme, ThemeContext };
