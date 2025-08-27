import apiService from '@/shared/api/apiService';
import type { PhotoType } from '../model/types';

const getPhotosByAlbumId = (albumId: number): Promise<PhotoType[]> =>
  apiService<PhotoType[]>(`albums/${albumId}/photos`);

export { getPhotosByAlbumId };
