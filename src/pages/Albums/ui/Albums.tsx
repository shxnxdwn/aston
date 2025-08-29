import styles from './Albums.module.css';
import { AlbumList } from '@/widgets/AlbumList';
import { useGetAlbumsQuery } from '@/entities/Album';

const Albums = () => {
  const { data: albums, isLoading, isError } = useGetAlbumsQuery();

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке альбомов</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Альбомы</h1>
      <div className={styles.contentWrapper}>
        <AlbumList isLoading={isLoading} albums={albums || []} />
      </div>
    </div>
  );
};

export default Albums;
