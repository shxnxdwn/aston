import styles from './FeedPage.module.css';
import { useMemo, useState } from 'react';
import { PostLengthFilter, filterByLength, type LengthFilterType } from '@/features/PostLengthFilter';
import { PostList as PostListWithLoading } from '@/widgets/PostList';
import { usePosts } from '@/widgets/PostList';

const FeedPage = () => {
  const { posts, isLoading, error } = usePosts();
  const [activeFilter, setActiveFilter] = useState<LengthFilterType>('all');
  const filteredPosts = useMemo(() => filterByLength(posts, activeFilter), [posts, activeFilter]);

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Ошибка при загрузке постов</h1>
        <p>{error}</p>
      </div>
    );
  }

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

export default FeedPage;
