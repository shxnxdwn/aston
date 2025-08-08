import {useContext} from 'react';
import {type ThemeType, type ThemeContextType, Theme, ThemeContext} from './ThemeContext';


type UseThemeResultType = {
  theme: ThemeType,
  changeTheme: () => void
};

type useThemeType = () => UseThemeResultType;


const useTheme: useThemeType = () => {

  const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);

  const changeTheme = () => {

    if (!setTheme) {
      console.warn('No setTheme in ThemeContext');
      return;
    }

    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return {
    theme: theme || Theme.Dark,
    changeTheme,
  };
};


export default useTheme;
