import styles from './HomePage.module.css';
import PostList from '../../../widgets/PostList';


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Лента постов</h1>
      <PostList />
    </div>
  );
};


export default HomePage;
