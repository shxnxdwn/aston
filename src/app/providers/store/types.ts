import { store } from './store';
import { albumReducer, albumsApi } from '@/entities/Album';
import { commentReducer, commentsApi } from '@/entities/Comment';
import { photoReducer, photosApi } from '@/entities/Photo';
import { postReducer, postsApi } from '@/entities/Post';
import { todoReducer, todosApi } from '@/entities/Todo';
import { userReducer, usersApi } from '@/entities/User';

export type StateSchema = {
  album: ReturnType<typeof albumReducer>;
  comment: ReturnType<typeof commentReducer>;
  photo: ReturnType<typeof photoReducer>;
  post: ReturnType<typeof postReducer>;
  todo: ReturnType<typeof todoReducer>;
  user: ReturnType<typeof userReducer>;

  [albumsApi.reducerPath]: ReturnType<typeof albumsApi.reducer>;
  [commentsApi.reducerPath]: ReturnType<typeof commentsApi.reducer>;
  [photosApi.reducerPath]: ReturnType<typeof photosApi.reducer>;
  [postsApi.reducerPath]: ReturnType<typeof postsApi.reducer>;
  [todosApi.reducerPath]: ReturnType<typeof todosApi.reducer>;
  [usersApi.reducerPath]: ReturnType<typeof usersApi.reducer>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
