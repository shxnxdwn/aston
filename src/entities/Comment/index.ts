export { default } from './ui/Comment';

export type { CommentType } from './model/types';

export { commentsApi, useGetCommentsQuery, useGetCommentsByPostIdQuery } from './api/commentApi';

export { commentActions, commentSelectors, commentReducer } from './model/slice/commentSlice';
