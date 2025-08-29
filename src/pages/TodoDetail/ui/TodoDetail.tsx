import styles from './TodoDetail.module.css';
import { useParams } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import TodoInfo from '@/widgets/TodoInfo';
import { useGetTodoByIdQuery } from '@/entities/Todo';

const TodoDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: todo, isLoading, isError } = useGetTodoByIdQuery(Number(id), { skip: !id });

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError || !todo) {
    return <div className={styles.statusWrapper}>{'Todo not found.'}</div>;
  }

  return (
    <div className={styles.todoPage}>
      <TodoInfo todo={todo} />
    </div>
  );
};

export default TodoDetail;
