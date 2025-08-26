import styles from './PostList.module.css';
import withLoading from '@/shared/lib/hoc/withLoading.tsx';
import Post, { type PostType } from '@/entities/Post';

type PostListProps = {
  posts: PostType[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <section className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
};

const PostListWithLoading = withLoading(PostList);

export { PostListWithLoading as PostList };
