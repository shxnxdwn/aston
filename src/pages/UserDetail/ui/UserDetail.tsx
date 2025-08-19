import styles from './UserDetail.module.css';
import { useParams } from 'react-router-dom';
import useUserDetail from '../model/hooks/useUserDetail';
import Loader from '@/shared/ui/Loader';
import UserInfo from '@/widgets/UserInfo';

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
    </div>
  );
};

export default UserDetail;
