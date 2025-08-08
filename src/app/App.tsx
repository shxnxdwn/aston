import './styles/index.css';
import {useEffect} from 'react';
import useTheme from '../shared/lib/theme/UseTheme.ts';
import MainLayout from '../shared/layouts/MainLayout';
import HomePage from '../pages/home';
import LayoutHeader from '../widgets/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter';


const App = () => {

  const {theme} = useTheme();

  useEffect(() => {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.classList.remove('theme-dark');
      rootElement.classList.remove('theme-light');
      rootElement.classList.add(theme);
    }
  }, [theme]);


  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <HomePage />
    </MainLayout>
  )
};


export default App;
