import styles from './AlbumInfo.module.css';
import { type AlbumType } from '@/entities/Album';

type AlbumInfoProps = {
  album: AlbumType;
};

const AlbumInfo = ({ album }: AlbumInfoProps) => {
  return (
    <article className={styles.albumInfo}>
      <header className={styles.header}>
        <h2 className={styles.title}>{album.title}</h2>
      </header>
    </article>
  );
};

export default AlbumInfo;
