import styles from './PostCard.module.css';


type PostCardProps = {
  id: number,
  title: string,
  body: string
};


const PostCard = ({ id, title, body }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.id}>#{id}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.body}>{body}</p>
      <a href="#" className={styles.link}>Читать далее</a>
    </article>
  );
};


export default PostCard;
