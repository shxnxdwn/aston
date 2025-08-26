import { type ReactNode } from 'react';
import styles from './MainLayout.module.css';

type MainLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const MainLayout = ({ children, header, footer }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.mainContent}>
        <div className={styles.container}>{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default MainLayout;
