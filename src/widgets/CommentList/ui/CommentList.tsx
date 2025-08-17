import styles from './CommentList.module.css';
import { useState, useCallback } from 'react';
import type { Comment } from '@/entities/Comment';

type CommentListProps = {
  comments?: Comment[];
  isLoading: boolean;
};

const CommentList = ({ comments, isLoading }: CommentListProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  if (isLoading) {
    return <h3>Loading comments...</h3>;
  }

  if (!comments || comments.length === 0) {
    return <h4>No comments yet.</h4>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={toggleVisibility}>
        {isVisible ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
      </button>

      {isVisible && (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.item}>
              <p>
                {comment.name} ({comment.email})
              </p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
