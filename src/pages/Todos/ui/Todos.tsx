import styles from './Todos.module.css';
import { TodoList } from '@/widgets/TodoList';
import { useGetTodosQuery } from '@/entities/Todo';

const Todos = () => {
  const { data: todos, isLoading, isError } = useGetTodosQuery();

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке задач</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Задачи</h1>
      <div className={styles.contentWrapper}>
        <TodoList isLoading={isLoading} todos={todos || []} />
      </div>
    </div>
  );
};

export default Todos;
