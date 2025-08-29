import styles from './PostDetail.module.css';
import { useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import PostInfo from '@/widgets/PostInfo';
import CommentsToggler from '@/features/CommentsToggler';
import CommentList from '@/widgets/CommentList';
import { useGetPostByIdQuery } from '@/entities/Post';
import { useGetCommentsByPostIdQuery } from '@/entities/Comment';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading: isPostLoading, isError: isPostError } = useGetPostByIdQuery(Number(id), { skip: !id });

  const {
    data: comments,
    isLoading: areCommentsLoading,
    isError: areCommentsError
  } = useGetCommentsByPostIdQuery(Number(id), { skip: !id });

  const isLoading = isPostLoading || areCommentsLoading;
  const isError = isPostError || areCommentsError;

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError || !post) {
    return <div className={styles.statusWrapper}>{'Post not found.'}</div>;
  }

  return (
    <div className={styles.postPage}>
      <PostInfo post={post} />
      <CommentsToggler comments={comments || []}>
        <CommentList comments={comments || []} />
      </CommentsToggler>
    </div>
  );
};

export default PostDetail;
