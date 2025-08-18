import { useState, useEffect } from 'react';
import { getPosts, type PostType } from '@/entities/Post';

const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedPosts = await getPosts();
        setPosts(loadedPosts);
      } catch (err) {
        console.error('Failed load posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setIsLoading(false);
      }
    };

    void loadPosts();
  }, []);

  return { posts, isLoading, error };
};

export { usePosts };
