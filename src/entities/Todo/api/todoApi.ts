import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { TodoType } from '../model/types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), { type: 'Todo', id: 'LIST' }]
          : [{ type: 'Todo', id: 'LIST' }]
    }),

    getTodoById: builder.query<TodoType, number | string>({
      query: (todoId) => `todos/${todoId}`,
      providesTags: (_result, _error, id) => [{ type: 'Todo', id }]
    }),

    getTodosByUserId: builder.query<TodoType[], string | number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Todo' as const, id })) : [])
    })
  })
});

export const { useGetTodosQuery, useGetTodoByIdQuery, useGetTodosByUserIdQuery } = todosApi;
