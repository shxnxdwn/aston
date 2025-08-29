import styles from './AlbumDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import AlbumInfo from '@/widgets/AlbumInfo';
import { useGetAlbumByIdQuery } from '@/entities/Album';

const AlbumDetail = () => {
  const { id } = useParams<{ id: 'string' }>();

  const { data: album, isLoading, isError } = useGetAlbumByIdQuery(Number(id), { skip: !id });

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError || !album) {
    return <div className={styles.statusWrapper}>{'Album not found.'}</div>;
  }

  return (
    <div className={styles.albumPage}>
      <AlbumInfo album={album} />
      <Link to={`/albums/${id}/photos`} className={styles.photosLink}>
        Посмотреть фотографии
      </Link>
    </div>
  );
};

export default AlbumDetail;
