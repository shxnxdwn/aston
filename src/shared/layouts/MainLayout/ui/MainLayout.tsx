import React from 'react';
import styles from './MainLayout.module.css';
import LayoutHeader from '../../../../widgets/LayoutHeader';
import LayoutFooter from '../../../../widgets/LayoutFooter';


type MainLayoutProps = {
  children: React.ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <LayoutHeader />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
