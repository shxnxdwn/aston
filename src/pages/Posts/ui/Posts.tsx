import styles from './Posts.module.css';
import { useMemo, useState } from 'react';
import { filterByLength, type LengthFilterType, PostLengthFilter } from '@/features/PostLengthFilter';
import { PostList, usePosts } from '@/widgets/PostList';

const Posts = () => {
  const { posts, isLoading, error } = usePosts();
  const [activeFilter, setActiveFilter] = useState<LengthFilterType>('all');
  const filteredPosts = useMemo(() => filterByLength(posts, activeFilter), [posts, activeFilter]);

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке постов</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лента постов</h1>
      <PostLengthFilter className={styles.filter} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className={styles.contentWrapper}>
        <PostList isLoading={isLoading} posts={filteredPosts} />
      </div>
    </div>
  );
};

export default Posts;
