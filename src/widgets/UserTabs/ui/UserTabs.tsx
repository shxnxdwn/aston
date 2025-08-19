import styles from './UserTabs.module.css';
import { NavLink, useParams, useLocation } from 'react-router-dom';

const UserTabs = () => {
  const { id: userId } = useParams<{ id: string }>();
  const location = useLocation();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  const getPostsNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    if (isActive || location.pathname === `/users/${userId}`) {
      return `${styles.tab} ${styles.active}`;
    }

    return styles.tab;
  };

  return (
    <nav className={styles.tabsContainer}>
      <NavLink to={`/users/${userId}/posts`} className={getPostsNavLinkClass} end>
        Посты
      </NavLink>
      <NavLink to={`/users/${userId}/albums`} className={getNavLinkClass} end>
        Альбомы
      </NavLink>
      <NavLink to={`/users/${userId}/todos`} className={getNavLinkClass} end>
        Задачи
      </NavLink>
    </nav>
  );
};

export default UserTabs;
