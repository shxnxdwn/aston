import { useEffect, useState } from 'react';
import { getAlbumsByUserId, type AlbumType } from '@/entities/Album';

const useUserAlbums = (userId: string | undefined) => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const loadAlbums = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedAlbums = await getAlbumsByUserId(userId);
        setAlbums(loadedAlbums);
      } catch (err) {
        console.error('Failed to load user albums:', err);
        setError(err instanceof Error ? err.message : 'Failed to load user albums');
      } finally {
        setIsLoading(false);
      }
    };

    void loadAlbums();
  }, [userId]);

  return { albums, isLoading, error };
};

export { useUserAlbums };
