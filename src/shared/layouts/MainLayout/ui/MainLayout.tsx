import React from 'react';
import styles from './MainLayout.module.css';


type MainLayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};


const MainLayout = ({ children, header, footer }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      {footer}
    </div>
  );
};


export default MainLayout;
