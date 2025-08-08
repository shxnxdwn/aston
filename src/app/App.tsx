import './styles/index.css';
import {useEffect} from 'react';
import useTheme from '../shared/lib/theme/UseTheme.ts';
import {Theme} from "../shared/lib/theme/ThemeContext.ts";
import MainLayout from '../shared/layouts/MainLayout';
import HomePage from '../pages/home';
import LayoutHeader from '../widgets/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter';


const App = () => {

  const {theme} = useTheme();

  useEffect(() => {
    document.body.classList.remove(Theme.Light, Theme.Dark);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <HomePage />
    </MainLayout>
  )
};


export default App;
