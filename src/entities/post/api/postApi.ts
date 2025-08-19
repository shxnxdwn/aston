import apiService from '@/shared/api/apiService';
import type { PostType } from '../model/types';
const getPosts = (): Promise<PostType[]> => apiService<PostType[]>('posts');
const getPostById = (postId: number): Promise<PostType> => apiService<PostType>(`posts/${postId}`);
const getPostsByUserId = (userId: string): Promise<PostType[]> => apiService<PostType[]>(`users/${userId}/posts`);

export { getPosts, getPostById, getPostsByUserId };
