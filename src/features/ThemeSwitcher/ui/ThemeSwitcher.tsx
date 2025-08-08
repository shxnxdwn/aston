import styles from './ThemeSwitcher.module.css';
import useTheme from '../../../shared/lib/theme/UseTheme.ts';
import {Theme} from '../../../shared/lib/theme/ThemeContext';


const ThemeSwitcher = () => {

  const {theme, changeTheme} = useTheme();

  return (
    <button onClick={changeTheme}>
      Сменить тему (текущая: {theme === Theme.Light ? 'Светлая' : 'Темная'})
    </button>
  );
};


export default ThemeSwitcher;
