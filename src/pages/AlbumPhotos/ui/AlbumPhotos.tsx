import styles from './AlbumPhotos.module.css';
import { useParams } from 'react-router-dom';
import { PhotoList } from '@/widgets/PhotoList';
import { useGetPhotosByAlbumIdQuery } from '@/entities/Photo';

const AlbumPhotos = () => {
  const { id } = useParams<{ id: string }>();
  const { data: photos, isLoading, isError } = useGetPhotosByAlbumIdQuery(Number(id), { skip: !id });

  if (!id) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>ID альбома не найден</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке фотографий</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фотографии из альбома #{id}</h1>
      <div className={styles.contentWrapper}>
        <PhotoList isLoading={isLoading} photos={photos || []} />
      </div>
    </div>
  );
};

export default AlbumPhotos;
