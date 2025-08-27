import { Outlet } from 'react-router-dom';
import LayoutHeader from '@/widgets/LayoutHeader';
import LayoutFooter from '@/widgets/LayoutFooter';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <LayoutHeader />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
