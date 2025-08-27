import styles from './AlbumInfo.module.css';
import { type AlbumType } from '@/entities/Album';

type AlbumInfoProps = {
  album: AlbumType;
};

const AlbumInfo = ({ album }: AlbumInfoProps) => {
  return (
    <article className={styles.albumInfo}>
      <header className={styles.header}>
        <h1 className={styles.title}>{album.title}</h1>
        <p className={styles.text}>Информация об альбоме</p>
      </header>
    </article>
  );
};

export default AlbumInfo;
