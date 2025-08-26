import styles from './TodoInfo.module.css';
import { type TodoType } from '@/entities/Todo';

type TodoInfoProps = {
  todo: TodoType;
};

const TodoInfo = ({ todo }: TodoInfoProps) => {
  return (
    <article className={styles.todoInfo}>
      <header className={styles.header}>
        <h1 className={styles.title}>{todo.title}</h1>
      </header>
      <p className={styles.completed}>{todo.completed ? 'Выполнена' : 'Не выполнена'}</p>
    </article>
  );
};

export default TodoInfo;
