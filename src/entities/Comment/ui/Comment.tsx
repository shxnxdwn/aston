import styles from './Comment.module.css';

type CommentProps = {
  postId?: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const Comment = ({ id, name, email, body }: CommentProps) => {
  return (
    <article className={styles.comment}>
      <header className={styles.header}>
        <div className={styles.authorInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.email}>{email}</span>
        </div>
        <span className={styles.id}>#{id}</span>
      </header>
      <p className={styles.body}>{body}</p>
    </article>
  );
};

export default Comment;
