import { useEffect, useState } from 'react';
import { getTodos, type TodoType } from '@/entities/Todo';

const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedTodos = await getTodos();
        setTodos(loadedTodos);
      } catch (err) {
        console.error('Failed load todos:', err);
        setError(err instanceof Error ? err.message : 'Failed to load todos');
      } finally {
        setIsLoading(false);
      }
    };

    void loadTodos();
  }, []);

  return { todos, isLoading, error };
};

export { useTodos };
