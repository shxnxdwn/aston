export { default } from './ui/Post';

export type { PostType } from './model/types';

export { postsApi, useGetPostsQuery, useGetPostByIdQuery, useGetPostsByUserIdQuery } from './api/postApi';

export { postActions, postSelectors, postReducer } from './model/slice/postSlice';
