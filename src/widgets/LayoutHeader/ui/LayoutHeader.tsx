import styles from './LayoutHeader.module.css';
import ThemeSwitcher from '../../../features/ThemeSwitcher';


const LayoutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>Aston App</a>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">О проекте</a>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};


export default LayoutHeader;
