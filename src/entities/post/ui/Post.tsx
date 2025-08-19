import styles from './Post.module.css';
import { Link } from 'react-router-dom';

type PostProps = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};
const Post = ({ id, title, body }: PostProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.id}>Пост #{id}</span>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <p className={styles.body}>{body}</p>
      <Link to={`/posts/${id}`} className={styles.link}>
        Читать далее
      </Link>
    </article>
  );
};
export default Post;
