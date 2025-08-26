import { useParams } from 'react-router-dom';
import { AlbumList, useUserAlbums } from '@/widgets/AlbumList';

const UserAlbums = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { albums, isLoading, error } = useUserAlbums(userId);

  if (error) {
    return <p>Ошибка при загрузке альбомов пользователя.</p>;
  }

  return <AlbumList albums={albums} isLoading={isLoading} />;
};

export default UserAlbums;
