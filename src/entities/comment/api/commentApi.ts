import apiService from '../../../shared/api/apiService.ts';
import type { Comment } from '../model/types';

const getCommentsByPostId = (postId: number): Promise<Comment[]> => apiService<Comment[]>(`posts/${postId}/comments`);

export { getCommentsByPostId };
