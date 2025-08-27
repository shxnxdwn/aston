import styles from './AlbumPhotos.module.css';
import { useParams } from 'react-router-dom';
import { PhotoList, usePhotos } from '@/widgets/PhotoList';

const AlbumPhotos = () => {
  const { id } = useParams<{ id: string }>();
  const { photos, isLoading, error } = usePhotos({ albumId: Number(id) });

  if (!id) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>ID альбома не найден</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке фотографий</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фотографии из альбома #{id}</h1>
      <div className={styles.contentWrapper}>
        <PhotoList isLoading={isLoading} photos={photos} />
      </div>
    </div>
  );
};

export default AlbumPhotos;
