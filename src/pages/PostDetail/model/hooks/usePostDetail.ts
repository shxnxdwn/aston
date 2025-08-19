import { useEffect, useState } from 'react';
import { getPostById, type PostType } from '@/entities/Post';
import { type CommentType, getCommentsByPostId } from '@/entities/Comment';

const usePostDetail = (id: string | undefined) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

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
        setError(err instanceof Error ? err.message : 'Failed load post data');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPostData();
  }, [id]);

  return { post, comments, isLoading, error };
};

export default usePostDetail;
