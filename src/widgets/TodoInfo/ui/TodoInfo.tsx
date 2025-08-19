import styles from './TodoInfo.module.css';
import { type TodoType } from '@/entities/Todo';

type TodoInfoProps = {
  todo: TodoType;
};

const TodoInfo = ({ todo }: TodoInfoProps) => {
  return (
    <article className={styles.todoInfo}>
      <header className={styles.header}>
        <h2 className={styles.title}>{todo.title}</h2>
      </header>
      <p className={styles.completed}>{todo.completed}</p>
    </article>
  );
};

export default TodoInfo;
