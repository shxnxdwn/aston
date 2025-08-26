import { useParams } from 'react-router-dom';
import { PostList, useUserPosts } from '@/widgets/PostList';

const UserPosts = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { posts, isLoading, error } = useUserPosts(userId);

  if (error) {
    return <p>Ошибка при загрузке постов пользователя.</p>;
  }

  return <PostList posts={posts} isLoading={isLoading} />;
};

export default UserPosts;
