import styles from './Todos.module.css';
import { TodoList, useTodos } from '@/widgets/TodoList';

const Todos = () => {
  const { todos, isLoading, error } = useTodos();

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке задач</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Задачи</h1>
      <div className={styles.contentWrapper}>
        <TodoList isLoading={isLoading} todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
