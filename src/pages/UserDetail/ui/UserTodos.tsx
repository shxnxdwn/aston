import { useParams } from 'react-router-dom';
import { TodoList } from '@/widgets/TodoList';
import { useGetTodosByUserIdQuery } from '@/entities/Todo';

const UserTodos = () => {
  const { id: userId } = useParams<{ id: string }>();

  const { data: todos, isLoading, isError } = useGetTodosByUserIdQuery(userId!, { skip: !userId });

  if (isError) {
    return <p>Ошибка при загрузке задач пользователя.</p>;
  }

  return <TodoList todos={todos || []} isLoading={isLoading} />;
};

export default UserTodos;
