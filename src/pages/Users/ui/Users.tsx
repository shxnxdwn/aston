import styles from './Users.module.css';
import { UserList, useUsers } from '@/widgets/UserList';

const Users = () => {
  const { users, isLoading, error } = useUsers();

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке пользователей</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <div className={styles.contentWrapper}>
        <UserList isLoading={isLoading} users={users} />
      </div>
    </div>
  );
};

export default Users;
