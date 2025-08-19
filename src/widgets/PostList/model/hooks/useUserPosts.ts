import { useState, useEffect } from 'react';
import { getPostsByUserId } from '@/entities/Post/api/postApi';
import type { PostType } from '@/entities/Post/model/types';

const useUserPosts = (userId?: string) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedPosts = await getPostsByUserId(userId);
        setPosts(loadedPosts);
      } catch (err) {
        console.error('Failed load user posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setIsLoading(false);
      }
    };

    void loadPosts();
  }, [userId]);

  return { posts, isLoading, error };
};

export { useUserPosts };
