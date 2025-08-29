import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PhotoType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const photosAdapter = createEntityAdapter<PhotoType>();

export const selectPhotoState = (state: StateSchema) => state.photo;
export const photoSelectors = photosAdapter.getSelectors<StateSchema>(selectPhotoState);

export const photoSlice = createSlice({
  name: 'photo',
  initialState: photosAdapter.getInitialState(),
  reducers: {
    setAllPhotos: (state, action: PayloadAction<PhotoType[]>) => {
      photosAdapter.setAll(state, action.payload);
    },
    addOnePhoto: (state, action: PayloadAction<PhotoType>) => {
      photosAdapter.addOne(state, action.payload);
    },
    clearPhotos: (state) => {
      photosAdapter.removeAll(state);
    }
  }
});

export const { actions: photoActions } = photoSlice;
export const { reducer: photoReducer } = photoSlice;
