import '@/shared/styles/index.css';
import { useEffect } from 'react';
import useTheme from '@/shared/lib/theme/UseTheme.ts';
import AppRouter from './providers/router/AppRouter';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = `${theme}`;
  }, [theme]);

  return <AppRouter />;
};

export default App;
