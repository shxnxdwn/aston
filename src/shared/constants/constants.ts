type ThemeType = typeof Theme[keyof typeof Theme];


const Theme = {
  Dark: 'theme-dark',
  Light: 'theme-light'
} as const;


const DEFAULT_THEME = Theme.Dark;


export type {ThemeType};
export {DEFAULT_THEME, Theme};
