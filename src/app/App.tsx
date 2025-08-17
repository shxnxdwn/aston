import '@/shared/styles/index.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import useTheme from '@/shared/lib/theme/UseTheme.ts';
import LayoutHeader from '@/widgets/LayoutHeader';
import LayoutFooter from '@/widgets/LayoutFooter';
import MainLayout from '@/shared/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import PostPage from '@/pages/PostPage';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = `${theme}`;
  }, [theme]);

  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
