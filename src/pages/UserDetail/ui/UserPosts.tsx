import { useParams } from 'react-router-dom';
import { PostList } from '@/widgets/PostList';
import { useGetPostsByUserIdQuery } from '@/entities/Post';

const UserPosts = () => {
  const { id: userId } = useParams<{ id: string }>();

  const { data: posts, isLoading, isError } = useGetPostsByUserIdQuery(userId!, { skip: !userId });

  if (isError) {
    return <p>Ошибка при загрузке постов пользователя.</p>;
  }

  return <PostList posts={posts || []} isLoading={isLoading} />;
};

export default UserPosts;
