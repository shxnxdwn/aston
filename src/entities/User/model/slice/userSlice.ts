import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const usersAdapter = createEntityAdapter<UserType>();

export const selectUserState = (state: StateSchema) => state.user;
export const userSelectors = usersAdapter.getSelectors<StateSchema>(selectUserState);

export const userSlice = createSlice({
  name: 'user',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setAllUsers: (state, action: PayloadAction<UserType[]>) => {
      usersAdapter.setAll(state, action.payload);
    },
    addOneUser: (state, action: PayloadAction<UserType>) => {
      usersAdapter.addOne(state, action.payload);
    },
    clearUsers: (state) => {
      usersAdapter.removeAll(state);
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
