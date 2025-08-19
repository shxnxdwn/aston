import apiService from '@/shared/api/apiService';
import type { TodoType } from '../model/types';

const getTodos = (): Promise<TodoType[]> => apiService<TodoType[]>('todos');

const getTodoById = (id: number): Promise<TodoType> => apiService<TodoType>(`todos/${id}`);

const getTodosByUserId = (userId: string): Promise<TodoType[]> => apiService<TodoType[]>(`users/${userId}/todos`);

export { getTodos, getTodoById, getTodosByUserId };
