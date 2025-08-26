import styles from './CommentsToggler.module.css';
import { useCallback, useState } from 'react';
import { type CommentType } from '@/entities/Comment';
import Button from '@/shared/ui/Button';
import CommentList from '@/widgets/CommentList';

type CommentsTogglerProps = {
  comments: CommentType[];
};

const CommentsToggler = ({ comments }: CommentsTogglerProps) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const handleCommentsToggler = useCallback(() => {
    setIsCommentsVisible((prev) => !prev);
  }, []);

  if (comments.length === 0) {
    return (
      <section className={styles.commentsSection}>
        <h2 className={styles.commentsTitle}>Комментариев пока нет</h2>
      </section>
    );
  }

  return (
    <section className={styles.commentsSection}>
      <div className={styles.commentsHeader}>
        <h2 className={styles.commentsTitle}>Комментарии ({comments.length})</h2>
        <Button variant="ghost" onClick={handleCommentsToggler}>
          {isCommentsVisible ? 'Свернуть' : 'Развернуть'}
        </Button>
      </div>

      <div className={`${styles.commentsWrapper} ${isCommentsVisible ? styles.visible : ''}`}>
        <div className={styles.commentListContainer}>
          <CommentList comments={comments} />
        </div>
      </div>
    </section>
  );
};

export default CommentsToggler;
