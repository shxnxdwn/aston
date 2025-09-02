import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { PostType } from '../model/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), { type: 'Post', id: 'LIST' }]
          : [{ type: 'Post', id: 'LIST' }]
    }),

    getPostById: builder.query<PostType, number | string>({
      query: (postId) => `posts/${postId}`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }]
    }),

    getPostsByUserId: builder.query<PostType[], string | number>({
      query: (userId) => `users/${userId}/posts`,
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Post' as const, id })) : [])
    })
  })
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetPostsByUserIdQuery } = postsApi;
