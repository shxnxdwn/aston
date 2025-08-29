import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PostType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const postsAdapter = createEntityAdapter<PostType>();

export const selectPostState = (state: StateSchema) => state.post;
export const postSelectors = postsAdapter.getSelectors<StateSchema>(selectPostState);

export const postSlice = createSlice({
  name: 'post',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setAllPosts: (state, action: PayloadAction<PostType[]>) => {
      postsAdapter.setAll(state, action.payload);
    },
    addOnePost: (state, action: PayloadAction<PostType>) => {
      postsAdapter.addOne(state, action.payload);
    },
    clearPosts: (state) => {
      postsAdapter.removeAll(state);
    }
  }
});

export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
