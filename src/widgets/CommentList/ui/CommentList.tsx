import styles from './CommentList.module.css';
import Comment, { type CommentType } from '@/entities/Comment';

type CommentListProps = {
  comments: CommentType[];
};

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <section className={styles.commentList}>
      {comments.map((comment) => (
        <Comment key={comment.id} id={comment.id} name={comment.name} email={comment.email} body={comment.body} />
      ))}
    </section>
  );
};

export default CommentList;
