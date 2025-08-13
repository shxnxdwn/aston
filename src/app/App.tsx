import './styles/index.css';
import MainLayout from '../shared/layouts/MainLayout';
import HomePage from '../pages/home';
import LayoutHeader from '../widgets/LayoutHeader';
import LayoutFooter from '../widgets/LayoutFooter';


const App = () => {
  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <HomePage />
    </MainLayout>
  )
};


export default App;
