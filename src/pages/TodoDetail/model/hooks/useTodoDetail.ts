import { useEffect, useState } from 'react';
import { getTodoById, type TodoType } from '@/entities/Todo';

const useTodoDetail = (id: string | undefined) => {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchTodoData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const todoId = Number(id);
        const todoData = await getTodoById(todoId);
        setTodo(todoData);
      } catch (err) {
        console.error('Failed to load todo data', err);
        setError(err instanceof Error ? err.message : 'Failed to load todo data');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchTodoData();
  }, [id]);

  return { todo, isLoading, error };
};

export default useTodoDetail;
