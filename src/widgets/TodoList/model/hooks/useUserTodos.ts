import { useEffect, useState } from 'react';
import { getTodosByUserId, type TodoType } from '@/entities/Todo';

const useUserTodos = (userId: string | undefined) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const loadTodos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedTodos = await getTodosByUserId(userId);
        setTodos(loadedTodos);
      } catch (err) {
        console.error('Failed to load user todos:', err);
        setError(err instanceof Error ? err.message : 'Failed to load user todos');
      } finally {
        setIsLoading(false);
      }
    };

    void loadTodos();
  }, [userId]);

  return { todos, isLoading, error };
};

export { useUserTodos };
