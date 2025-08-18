import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '@/shared/layouts/MainLayout';
import LayoutHeader from '@/widgets/LayoutHeader';
import LayoutFooter from '@/widgets/LayoutFooter';
import FeedPage from '@/pages/FeedPage';
import PostPage from '@/pages/PostPage';
import UserPostsPage from '@/pages/UserPostsPage';
import UserAlbumsPage from '@/pages/UserAlbumsPage';
import AlbumPhotosPage from '@/pages/AlbumPhotosPage';
import UserTodosPage from '@/pages/UserTodosPage';

const AppRouter = () => {
  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<FeedPage />} />
        <Route path="/posts/:id" element={<PostPage />} />

        <Route path="/users/:id/posts" element={<UserPostsPage />} />
        <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
        <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
        <Route path="/users/:id/todos" element={<UserTodosPage />} />

        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
