import apiService from '../../../shared/api/apiService.ts';
import type { Post } from '../model/types';

const getPosts = (): Promise<Post[]> => apiService<Post[]>('posts');

const getPostById = (postId: number): Promise<Post> => apiService<Post>(`posts/${postId}`);

export { getPosts, getPostById };
