import { useEffect, useState } from 'react';
import { getPhotosByAlbumId, type PhotoType } from '@/entities/Photo';

type usePhotosProps = {
  albumId: number;
};

const usePhotos = ({ albumId }: usePhotosProps) => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedPhotos = await getPhotosByAlbumId(albumId);
        setPhotos(loadedPhotos);
      } catch (err) {
        console.error('Failed load photos:', err);
        setError(err instanceof Error ? err.message : 'Failed to load photos');
      } finally {
        setIsLoading(false);
      }
    };

    void loadPhotos();
  }, [albumId]);

  return { photos, isLoading, error };
};

export { usePhotos };
