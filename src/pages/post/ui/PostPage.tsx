import styles from './PostPage.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, type Post } from '../../../entities/post';
import { type Comment, getCommentsByPostId } from '../../../entities/comment';
import Loader from '../../../shared/ui/Loader';
import CommentList from '../../../widgets/CommentList';

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPostData = async () => {
      try {
        const postId = Number(id);
        setIsLoading(true);
        setError(null);

        const [postData, commentsData] = await Promise.all([getPostById(postId), getCommentsByPostId(postId)]);
        setPost(postData);
        setComments(commentsData);
      } catch (e) {
        setError('Post load failed');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPostData();
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  if (error || !post) {
    return <div>{error || 'Post did not found.'}</div>;
  }

  return (
    <section className={styles.postPage}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
      <h2>Комментарии ({comments.length})</h2>
      <CommentList comments={comments} />
    </section>
  );
};

export default PostPage;
