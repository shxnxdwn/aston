import apiService from '@/shared/api/apiService';
import type { TodoType } from '../model/types';

const getTodos = (): Promise<TodoType[]> => apiService<TodoType[]>('todos');

const getTodosByUserId = (userId: string): Promise<TodoType[]> => apiService<TodoType[]>(`users/${userId}/todos`);

export { getTodos, getTodosByUserId };
