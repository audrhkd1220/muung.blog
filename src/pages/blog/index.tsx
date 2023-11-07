import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/datasets/post';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 pb-6 lg:max-w-6xl lg:px-5">
        <section className="pt-6">
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <p className="mb-2">개발하면서 경험한 것을 기록</p>
        </section>
        <section className="pt-6">
          <div className="my-6">
            <h2 className="text-3xl font-bold">All Posts</h2>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
