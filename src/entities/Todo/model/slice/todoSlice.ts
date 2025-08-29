import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../types';
import type { StateSchema } from '@/app/providers/store/types.ts';

const todosAdapter = createEntityAdapter<TodoType>();

export const selectTodoState = (state: StateSchema) => state.todo;
export const todoSelectors = todosAdapter.getSelectors<StateSchema>(selectTodoState);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    setAllTodos: (state, action: PayloadAction<TodoType[]>) => {
      todosAdapter.setAll(state, action.payload);
    },
    addOneTodo: (state, action: PayloadAction<TodoType>) => {
      todosAdapter.addOne(state, action.payload);
    },
    clearTodos: (state) => {
      todosAdapter.removeAll(state);
    }
  }
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
