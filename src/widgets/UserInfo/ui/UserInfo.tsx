import styles from './UserInfo.module.css';
import { type UserType } from '@/entities/User';

type UserInfoProps = {
  user: UserType;
};

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <article className={styles.userInfo}>
      <header className={styles.header}>
        <h2 className={styles.title}>{user.username}</h2>
      </header>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.email}>{user.email}</p>
    </article>
  );
};

export default UserInfo;
