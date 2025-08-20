import styles from './UserDetail.module.css';
import { Outlet, useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import UserInfo from '@/widgets/UserInfo';
import UserTabs from '@/widgets/UserTabs';
import useUserDetail from '@/pages/UserDetail/model/hooks/useUserDetail';

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user, isLoading, error } = useUserDetail(id);

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (error || !user) {
    return <div className={styles.statusWrapper}>{error || 'User not found.'}</div>;
  }

  return (
    <div className={styles.userPage}>
      <UserInfo user={user} />
      <UserTabs />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserDetail;
