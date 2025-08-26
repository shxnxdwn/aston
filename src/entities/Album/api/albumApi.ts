import apiService from '@/shared/api/apiService';
import type { AlbumType } from '../model/types';

const getAlbums = (): Promise<AlbumType[]> => apiService<AlbumType[]>('albums');

const getAlbumById = (id: number): Promise<AlbumType> => apiService<AlbumType>(`albums/${id}`);

const getAlbumsByUserId = (userId: string): Promise<AlbumType[]> => apiService<AlbumType[]>(`users/${userId}/albums`);

export { getAlbums, getAlbumById, getAlbumsByUserId };
