import { useEffect, useState } from 'react';
import { type AlbumType, getAlbums } from '@/entities/Album';

const useAlbums = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedAlbums = await getAlbums();
        setAlbums(loadedAlbums);
      } catch (err) {
        console.error('Failed load albums:', err);
        setError(err instanceof Error ? err.message : 'Failed to load albums');
      } finally {
        setIsLoading(false);
      }
    };

    void loadAlbums();
  }, []);

  return { albums, isLoading, error };
};

export { useAlbums };
