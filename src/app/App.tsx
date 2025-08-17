import '../shared/styles/index.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import useTheme from '../shared/lib/theme/UseTheme.ts';
import MainLayout from '../shared/layouts/MainLayout';
import HomePage from '../pages/home';
import LayoutHeader from '../widgets/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = `${theme}`;
  }, [theme]);

  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
