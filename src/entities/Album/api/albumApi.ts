import apiService from '@/shared/api/apiService';
import type { AlbumType } from '../model/types';

const getAlbums = (): Promise<AlbumType[]> => apiService<AlbumType[]>('albums');

const getAlbumsById = (id: string): Promise<AlbumType[]> => apiService<AlbumType[]>(`albums/${id}`);

const getAlbumsByUserId = (userId: string): Promise<AlbumType[]> => apiService<AlbumType[]>(`users/${userId}/albums`);

export { getAlbums, getAlbumsById, getAlbumsByUserId };
