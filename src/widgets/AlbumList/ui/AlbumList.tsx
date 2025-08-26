import styles from './AlbumList.module.css';
import withLoading from '@/shared/lib/hoc/withLoading.tsx';
import Album, { type AlbumType } from '@/entities/Album';

type AlbumListProps = {
  albums: AlbumType[];
};

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <section className={styles.albumList}>
      {albums.map((album) => (
        <Album key={album.id} id={album.id} userId={album.userId} title={album.title} />
      ))}
    </section>
  );
};

const AlbumListWithLoading = withLoading(AlbumList);

export { AlbumListWithLoading as AlbumList };
