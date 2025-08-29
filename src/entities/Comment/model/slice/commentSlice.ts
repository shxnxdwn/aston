import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CommentType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const commentsAdapter = createEntityAdapter<CommentType>();

export const selectCommentState = (state: StateSchema) => state.comment;
export const commentSelectors = commentsAdapter.getSelectors<StateSchema>(selectCommentState);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    setAllComments: (state, action: PayloadAction<CommentType[]>) => {
      commentsAdapter.setAll(state, action.payload);
    },
    addOneComment: (state, action: PayloadAction<CommentType>) => {
      commentsAdapter.addOne(state, action.payload);
    },
    clearComments: (state) => {
      commentsAdapter.removeAll(state);
    }
  }
});

export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
