import { useParams } from 'react-router-dom';
import { AlbumList } from '@/widgets/AlbumList';
import { useGetAlbumsByUserIdQuery } from '@/entities/Album';

const UserAlbums = () => {
  const { id: userId } = useParams<{ id: string }>();

  const { data: albums, isLoading, isError } = useGetAlbumsByUserIdQuery(userId!, { skip: !userId });

  if (isError) {
    return <p>Ошибка при загрузке альбомов пользователя.</p>;
  }

  return <AlbumList albums={albums || []} isLoading={isLoading} />;
};

export default UserAlbums;
