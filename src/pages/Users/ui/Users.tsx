import styles from './Users.module.css';
import { UserList } from '@/widgets/UserList';
import { useGetUsersQuery } from '@/entities/User';

const Users = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке пользователей</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <div className={styles.contentWrapper}>
        <UserList isLoading={isLoading} users={users || []} />
      </div>
    </div>
  );
};

export default Users;
