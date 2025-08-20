import styles from './Albums.module.css';
import { AlbumList, useAlbums } from '@/widgets/AlbumList';

const Albums = () => {
  const { albums, isLoading, error } = useAlbums();

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке альбомов</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Альбомы</h1>
      <div className={styles.contentWrapper}>
        <AlbumList isLoading={isLoading} albums={albums} />
      </div>
    </div>
  );
};

export default Albums;
