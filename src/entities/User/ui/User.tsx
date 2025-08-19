import styles from './User.module.css';
import { Link } from 'react-router-dom';

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const User = ({ id, name, username, email }: UserProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <span className={styles.id}>Пользователь #{id}</span>
        <h3 className={styles.username}>{username}</h3>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
      <Link to={`/users/${id}`} className={styles.link}>
        Профиль пользователя
      </Link>
    </article>
  );
};

export default User;
