import styles from './ThemeSwitcher.module.css';
import useTheme from '@/shared/lib/theme/UseTheme.ts';
import { Theme } from '@/shared/lib/theme/ThemeContext.ts';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <label className={styles.change}>
      <input type="checkbox" checked={theme === Theme.Dark} onChange={changeTheme} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitcher;
