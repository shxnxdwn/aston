import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/shared/layouts/MainLayout';
import Loader from '@/shared/ui/Loader';

const Posts = lazy(() => import('@/pages/Posts'));
const PostDetail = lazy(() => import('@/pages/PostDetail'));
const Albums = lazy(() => import('@/pages/Albums'));
const AlbumDetail = lazy(() => import('@/pages/AlbumDetail'));
const AlbumPhotos = lazy(() => import('@/pages/AlbumPhotos'));
const Todos = lazy(() => import('@/pages/Todos'));
const TodoDetail = lazy(() => import('@/pages/TodoDetail'));
const Users = lazy(() => import('@/pages/Users'));
const UserDetail = lazy(() => import('@/pages/UserDetail'));

const UserPosts = lazy(() => import('@/pages/UserDetail').then((module) => ({ default: module.UserPosts })));
const UserAlbums = lazy(() => import('@/pages/UserDetail').then((module) => ({ default: module.UserAlbums })));
const UserTodos = lazy(() => import('@/pages/UserDetail').then((module) => ({ default: module.UserTodos })));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/posts" replace />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:id" element={<AlbumDetail />} />
          <Route path="albums/:id/photos" element={<AlbumPhotos />} />
          <Route path="todos" element={<Todos />} />
          <Route path="todos/:id" element={<TodoDetail />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />}>
            <Route index element={<UserPosts />} />
            <Route path="posts" element={<UserPosts />} />
            <Route path="albums" element={<UserAlbums />} />
            <Route path="todos" element={<UserTodos />} />
          </Route>
        </Route>

        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
