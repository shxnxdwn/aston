import styles from './LayoutHeader.module.css';


const LayoutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>Aston App</a>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">О проекте</a>
        </nav>
      </div>
    </header>
  );
};


export default LayoutHeader;
