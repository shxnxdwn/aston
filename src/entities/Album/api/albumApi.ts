import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { AlbumType } from '../model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ['Album'],

  endpoints: (builder) => ({
    getAlbums: builder.query<AlbumType[], void>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Album' as const, id })), { type: 'Album', id: 'LIST' }]
          : [{ type: 'Album', id: 'LIST' }]
    }),

    getAlbumById: builder.query<AlbumType, number>({
      query: (id) => `albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Album', id }]
    }),

    getAlbumsByUserId: builder.query<AlbumType[], string | number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Album' as const, id })) : [])
    })
  })
});

export const { useGetAlbumsQuery, useGetAlbumByIdQuery, useGetAlbumsByUserIdQuery } = albumsApi;
