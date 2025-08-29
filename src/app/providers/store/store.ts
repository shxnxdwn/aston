import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { albumReducer, albumsApi } from '@/entities/Album';
import { commentReducer, commentsApi } from '@/entities/Comment';
import { photoReducer, photosApi } from '@/entities/Photo';
import { postReducer, postsApi } from '@/entities/Post';
import { todoReducer, todosApi } from '@/entities/Todo';
import { userReducer, usersApi } from '@/entities/User';

const rootReducer = combineReducers({
  album: albumReducer,
  comment: commentReducer,
  photo: photoReducer,
  post: postReducer,
  todo: todoReducer,
  user: userReducer,

  [albumsApi.reducerPath]: albumsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [photosApi.reducerPath]: photosApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      albumsApi.middleware,
      commentsApi.middleware,
      photosApi.middleware,
      postsApi.middleware,
      todosApi.middleware,
      usersApi.middleware
    )
});
