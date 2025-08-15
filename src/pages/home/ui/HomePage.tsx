import styles from './HomePage.module.css';
import {useEffect, useState} from 'react';
import {type Post, MOCK_POSTS} from '../../../shared/constants/constants.ts';
import PostListWithLoading from '../../../widgets/PostList';


const HomePage = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(MOCK_POSTS);
      setIsLoading(false);

      return () => clearTimeout(timer);
    }, 2000);
  }, []);




  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лента постов</h1>
      <div className={styles.contentWrapper}>
        <PostListWithLoading isLoading={isLoading} posts={posts}/>
      </div>
    </div>
  );
};


export default HomePage;
