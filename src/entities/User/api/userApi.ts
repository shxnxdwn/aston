import type { UserType } from '../model/types';
import apiService from '@/shared/api/apiService.ts';

const getUsers = (): Promise<UserType[]> => apiService<UserType[]>('users');

const getUserById = (id: number): Promise<UserType> => apiService<UserType>(`users/${id}`);

export { getUserById, getUsers };
