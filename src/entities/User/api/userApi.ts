import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { UserType } from '../model/types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => 'users',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'User' as const, id })), { type: 'User', id: 'LIST' }]
          : [{ type: 'User', id: 'LIST' }]
    }),

    getUserById: builder.query<UserType, number | string>({
      query: (userId) => `users/${userId}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }]
    })
  })
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
