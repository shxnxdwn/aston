import styles from './TodoDetail.module.css';
import { useParams } from 'react-router-dom';
import useTodoDetail from '../model/hooks/useTodoDetail';
import Loader from '@/shared/ui/Loader';
import TodoInfo from '@/widgets/TodoInfo';

const TodoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { todo, isLoading, error } = useTodoDetail(id);

  if (isLoading) {
    return (
      <div className={styles.statusWrapper}>
        <Loader />
      </div>
    );
  }

  if (error || !todo) {
    return <div className={styles.statusWrapper}>{error || 'Todo not found.'}</div>;
  }

  return (
    <div className={styles.todoPage}>
      <TodoInfo todo={todo} />
    </div>
  );
};

export default TodoDetail;
