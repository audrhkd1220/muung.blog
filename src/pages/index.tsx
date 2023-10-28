import { getHomePosts } from '@/datasets/post';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function Home() {
  const posts = getHomePosts();

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5">
        <section className="mt-6 p-6 flex bg-teal-50 rounded-2xl">
          <div className="w-[310px] h-[350px] bg-[url('/home/profile.gif')] mr-6 bg-no-repeat bg-[0_-100px] rounded-2xl"></div>
          <div className="grow">
            <h2 className="text-3xl font-bold mb-2">WooSeok Jeong</h2>
            <p className="mb-2 text-xl font-medium">Welcome to muung.blog 🥳</p>
            <p className="mb-2">
              이곳은 개발하면서 경험한 것을 기억하기 위해 기록하는 공간입니다.
            </p>
            <Link href="/about" target="_blank" className="hover:underline">
              <div className="flex items-center gap-1 text-gray-500 hover:text-gray-900">
                <span className="font-semibold">about me</span>
                <span>
                  <svg
                    className="w-4 h-4 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="pt-6">
          <div className="my-6">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
          </div>
          <div>
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
