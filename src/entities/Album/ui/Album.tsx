import styles from './Album.module.css';
import { Link } from 'react-router-dom';

type AlbumProps = {
  userId?: number;
  id: number;
  title: string;
};

const Album = ({ id, title }: AlbumProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <span className={styles.id}>Альбом #{id}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <Link to={`/albums/${id}`} className={styles.link}>
        Посмотреть альбом
      </Link>
    </article>
  );
};

export default Album;
