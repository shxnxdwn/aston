import { useEffect, useState } from 'react';
import { type AlbumType, getAlbumById } from '@/entities/Album';

const useAlbumDetail = (id: string | undefined) => {
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchAlbumData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const albumId = Number(id);
        const albumData = await getAlbumById(albumId);
        setAlbum(albumData);
      } catch (err) {
        console.error('Failed to load album data', err);
        setError(err instanceof Error ? err.message : 'Failed to load album data');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchAlbumData();
  }, [id]);

  return { album, isLoading, error };
};

export default useAlbumDetail;
