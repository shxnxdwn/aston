import styles from './UserList.module.css';
import withLoading from '@/shared/lib/hoc/withLoading.tsx';
import User, { type UserType } from '@/entities/User';

type UserListProps = {
  users: UserType[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <section className={styles.userList}>
      {users.map((user) => (
        <User key={user.id} id={user.id} username={user.username} name={user.name} email={user.email} />
      ))}
    </section>
  );
};

const UserListWithLoading = withLoading(UserList);

export { UserListWithLoading as UserList };
