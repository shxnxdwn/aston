import { useCallback, useContext } from 'react';
import { Theme, ThemeContext, type ThemeContextType, type ThemeType } from './ThemeContext';

type UseThemeResultType = {
  theme: ThemeType;
  changeTheme: () => void;
};

type useThemeType = () => UseThemeResultType;

const useTheme: useThemeType = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  const changeTheme = useCallback(() => {
    if (!setTheme) {
      console.warn('No setTheme in ThemeContext');
      return;
    }

    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  }, [theme, setTheme]);

  return {
    theme: theme || Theme.Dark,
    changeTheme
  };
};

export default useTheme;
