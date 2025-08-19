import { useEffect, useState } from 'react';
import { getUsers, type UserType } from '@/entities/User';

const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const loadedUsers = await getUsers();
        setUsers(loadedUsers);
      } catch (err) {
        console.error('Failed load users:', err);
        setError(err instanceof Error ? err.message : 'Failed to load users');
      } finally {
        setIsLoading(false);
      }
    };

    void loadUsers();
  }, []);

  return { users, isLoading, error };
};

export { useUsers };
