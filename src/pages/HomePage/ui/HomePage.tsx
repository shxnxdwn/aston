import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import PostListWithLoading from '../../../widgets/PostList';
import { getPosts, type PostType } from '@/entities/Post';

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts = await getPosts();
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Failed load posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лента постов</h1>
      <div className={styles.contentWrapper}>
        <PostListWithLoading isLoading={isLoading} posts={posts} />
      </div>
    </div>
  );
};

export default HomePage;
