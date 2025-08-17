import styles from './HomePage.module.css';
import { useEffect, useMemo, useState } from 'react';
import { PostLengthFilter, filterByLength, type LengthFilterType } from '@/features/PostLengthFilter';
import { getPosts, type PostType } from '@/entities/Post';
import PostListWithLoading from '@/widgets/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<LengthFilterType>('all');

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
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

  const filteredPosts = useMemo(() => filterByLength(posts, activeFilter), [posts, activeFilter]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лента постов</h1>
      <PostLengthFilter className={styles.filter} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className={styles.contentWrapper}>
        <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
      </div>
    </div>
  );
};

export default HomePage;
