import { useEffect, useState } from 'react';
import { getUserById, type UserType } from '@/entities/User';

const useUserDetail = (id: string | undefined) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userId = Number(id);
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (err) {
        console.error('Failed to load user data', err);
        setError(err instanceof Error ? err.message : 'Failed to load user data');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchUserData();
  }, [id]);

  return { user, isLoading, error };
};

export default useUserDetail;
