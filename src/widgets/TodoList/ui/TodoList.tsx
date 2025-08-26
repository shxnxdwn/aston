import styles from './TodoList.module.css';
import withLoading from '@/shared/lib/hoc/withLoading.tsx';
import Todo, { type TodoType } from '@/entities/Todo';

type TodoListProps = {
  todos: TodoType[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <section className={styles.todoList}>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </section>
  );
};

const TodoListWithLoading = withLoading(TodoList);

export { TodoListWithLoading as TodoList };
