import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { CommentType } from '../model/types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    getComments: builder.query<CommentType[], void>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Comment' as const, id })), { type: 'Comment', id: 'LIST' }]
          : [{ type: 'Comment', id: 'LIST' }]
    }),
    getCommentsByPostId: builder.query<CommentType[], number | string>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Comment' as const, id })) : [])
    })
  })
});

export const { useGetCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi;
