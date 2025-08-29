import styles from './UserDetail.module.css';
import { Outlet, useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import UserInfo from '@/widgets/UserInfo';
import UserTabs from '@/widgets/UserTabs';
import { useGetUserByIdQuery } from '@/entities/User';

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: user, isLoading, isError } = useGetUserByIdQuery(Number(id), { skip: !id });

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError || !user) {
    return <div className={styles.statusWrapper}>{'User not found.'}</div>;
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
