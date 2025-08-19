import styles from './AlbumDetail.module.css';
import { useParams } from 'react-router-dom';
import useAlbumDetail from '../model/hooks/useAlbumDetail';
import Loader from '@/shared/ui/Loader';
import AlbumInfo from '@/widgets/AlbumInfo';

const AlbumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { album, isLoading, error } = useAlbumDetail(id);

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (error || !album) {
    return <div className={styles.statusWrapper}>{error || 'Album not found.'}</div>;
  }

  return (
    <div className={styles.albumPage}>
      <AlbumInfo album={album} />
    </div>
  );
};

export default AlbumDetail;
