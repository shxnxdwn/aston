import apiService from '@/shared/api/apiService.ts';
import type { PostType } from '../model/types';

const getPosts = (): Promise<PostType[]> => apiService<PostType[]>('posts');

const getPostById = (postId: number): Promise<PostType> => apiService<PostType>(`posts/${postId}`);

export { getPosts, getPostById };
