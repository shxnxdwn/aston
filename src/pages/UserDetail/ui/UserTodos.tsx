import { useParams } from 'react-router-dom';
import { TodoList, useUserTodos } from '@/widgets/TodoList';

const UserTodos = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { todos, isLoading, error } = useUserTodos(userId);

  if (error) {
    return <p>Ошибка при загрузке задач пользователя.</p>;
  }

  return <TodoList todos={todos} isLoading={isLoading} />;
};

export default UserTodos;
