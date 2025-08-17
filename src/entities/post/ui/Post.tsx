import styles from './Post.module.css';

type PostProps = {
  id: number;
  title: string;
  body: string;
};

const Post = ({ id, title, body }: PostProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.id}>#{id}</span>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <p className={styles.body}>{body}</p>
      <a href="#" className={styles.link}>
        Читать далее
      </a>
    </article>
  );
};

export default Post;
