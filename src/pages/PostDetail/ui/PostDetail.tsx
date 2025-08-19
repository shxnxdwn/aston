import styles from './PostDetail.module.css';
import { useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import PostInfo from '@/widgets/PostInfo';
import CommentsToggler from '@/features/CommentsToggler';
import usePostDetail from '@/pages/PostDetail/model/hooks/usePostDetail.ts';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { post, comments, isLoading, error } = usePostDetail(id);

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (error || !post) {
    return <div className={styles.statusWrapper}>{error || 'Post not found.'}</div>;
  }

  return (
    <div className={styles.postPage}>
      <PostInfo post={post} />
      <CommentsToggler comments={comments} />
    </div>
  );
};

export default PostDetail;
