import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/api/config';
import type { PhotoType } from '../model/types';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotos: builder.query<PhotoType[], void>({
      query: () => 'photos',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Photo' as const, id })), { type: 'Photo', id: 'LIST' }]
          : [{ type: 'Photo', id: 'LIST' }]
    }),

    getPhotosByAlbumId: builder.query<PhotoType[], number | string>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Photo' as const, id })) : [])
    })
  })
});

export const { useGetPhotosQuery, useGetPhotosByAlbumIdQuery } = photosApi;
