import apiService from '@/shared/api/apiService';
import type { CommentType } from '../model/types';

const getComments = (): Promise<CommentType[]> => apiService<CommentType[]>('comments');

const getCommentsByPostId = async (postId: number): Promise<CommentType[] | null> => {
  try {
    const allComments = await getComments();
    return allComments.filter((comment) => comment.postId === postId);
  } catch (error) {
    console.log('Failed to load comments', error);
    return null;
  }
};

export { getComments, getCommentsByPostId };
