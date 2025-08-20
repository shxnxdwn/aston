import styles from './Todo.module.css';
import { Link } from 'react-router-dom';

type TodoProps = {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todo = ({ id, title, completed }: TodoProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <span className={styles.id}>Задача #{id}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.isCompleted}>{completed ? 'Выполнена' : 'Не выполнена'}</p>
      </div>
      <Link to={`/todos/${id}`} className={styles.link}>
        Посмотреть задачу
      </Link>
    </article>
  );
};

export default Todo;
