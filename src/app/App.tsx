import './styles/index.css';
import useTheme from '../shared/lib/theme/UseTheme.ts';
import MainLayout from '../shared/layouts/MainLayout';
import HomePage from '../pages/home';
import LayoutHeader from '../widgets/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter';
import {useEffect} from "react";


const App = () => {

  const {theme} = useTheme();

  useEffect(() => {
    document.body.className='';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <HomePage />
    </MainLayout>
  )
};


export default App;
