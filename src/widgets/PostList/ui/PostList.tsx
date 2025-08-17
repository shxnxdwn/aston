import styles from './PostList.module.css';
import { type Post, PostCard } from '../../../entities/post';
import withLoading from '../../../shared/lib/hoc/withLoading.tsx';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <section className={styles.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
};

const PostListWithLoading = withLoading(PostList);

export default PostListWithLoading;
