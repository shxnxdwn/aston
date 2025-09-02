import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AlbumType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const albumsAdapter = createEntityAdapter<AlbumType>();

export const selectAlbumState = (state: StateSchema) => state.album;

export const albumSelectors = albumsAdapter.getSelectors<StateSchema>(selectAlbumState);

export const albumSlice = createSlice({
  name: 'album',
  initialState: albumsAdapter.getInitialState({}),
  reducers: {
    setAllAlbums: (state, action: PayloadAction<AlbumType[]>) => {
      albumsAdapter.setAll(state, action.payload);
    },
    addOneAlbum: (state, action: PayloadAction<AlbumType>) => {
      albumsAdapter.addOne(state, action.payload);
    },
    clearAlbums: (state) => {
      albumsAdapter.removeAll(state);
    }
  }
});

export const { actions: albumActions } = albumSlice;

export const { reducer: albumReducer } = albumSlice;
