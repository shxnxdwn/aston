import styles from './PostInfo.module.css';
import { type PostType } from '@/entities/Post';

type PostInfoProps = {
  post: PostType;
};

const PostInfo = ({ post }: PostInfoProps) => {
  return (
    <article className={styles.postInfo}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
      </header>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
};

export default PostInfo;
