import styles from './PostPage.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, type PostType } from '@/entities/Post';
import { type CommentType, getCommentsByPostId } from '@/entities/Comment';
import Loader from '@/shared/ui/Loader';
import PostInfo from '@/widgets/PostInfo';
import CommentsToggler from '@/features/CommentsToggler';

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const postId = Number(id);
        const [postData, commentsData] = await Promise.all([getPostById(postId), getCommentsByPostId(postId)]);
        setPost(postData);
        setComments(commentsData || []);
      } catch (err) {
        console.error('Failed to load post data', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    void fetchPostData();
  }, [id]);

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

export default PostPage;
