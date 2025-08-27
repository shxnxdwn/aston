import styles from './Photo.module.css';

type PhotoProps = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Photo = ({ albumId, id, title, thumbnailUrl }: PhotoProps) => {
  void thumbnailUrl; // Не работает via.placeholder

  return (
    <article className={styles.photoCard}>
      <img className={styles.thumbnail} src={`https://picsum.photos/seed/${id}/150`} alt={title} loading="lazy" />
      <div className={styles.photoInfo}>
        <span className={styles.id}>Фото #{id}</span>
        <span className={styles.albumId}>Альбом #{albumId}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </article>
  );
};

export default Photo;
