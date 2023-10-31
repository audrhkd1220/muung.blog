import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getAllPosts } from '@/datasets/post';

const Blog = () => {
  const posts = getAllPosts();
  console.log(posts);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5">
        <section className="pt-6">
          <h2 className="text-3xl font-bold mb-2">Tags</h2>
          <p className="mb-2">게시글의 모든 태그들을 보여줍니다.</p>
        </section>
        <section className="pt-6">
          <div className="flex flex-col gap-6 mb-6"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
