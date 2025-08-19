import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/shared/layouts/MainLayout';
import LayoutHeader from '@/widgets/LayoutHeader';
import LayoutFooter from '@/widgets/LayoutFooter';
import Posts from '@/pages/Posts';
import PostDetail from '@/pages/PostDetail';
import Albums from '@/pages/Albums';
import Todos from '@/pages/Todos';
import Users from '@/pages/Users';
import AlbumDetail from '@/pages/AlbumDetail';
import TodoDetail from '@/pages/TodoDetail';
import UserDetail from '@/pages/UserDetail/ui/UserDetail';
import UserPosts from '@/pages/UserDetail/ui/UserPosts';
import UserAlbums from '@/pages/UserDetail/ui/UserAlbums';
import UserTodos from '@/pages/UserDetail/ui/UserTodos';

const AppRouter = () => {
  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />
        <Route path="/todos/" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />}>
          <Route index element={<UserPosts />} />
          <Route path="posts" element={<UserPosts />} />
          <Route path="albums" element={<UserAlbums />} />
          <Route path="todos" element={<UserTodos />} />
        </Route>
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </MainLayout>
  );
};

export default AppRouter;
