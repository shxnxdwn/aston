import styles from './PhotoList.module.css';
import withLoading from '@/shared/lib/hoc/withLoading.tsx';
import Photo, { type PhotoType } from '@/entities/Photo';

type PhotoListProps = {
  photos: PhotoType[];
};

const PhotoList = ({ photos }: PhotoListProps) => {
  return (
    <section className={styles.photoList}>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          albumId={photo.albumId}
          title={photo.title}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
        />
      ))}
    </section>
  );
};

const PhotoListWithLoading = withLoading(PhotoList);

export { PhotoListWithLoading as PhotoList };
