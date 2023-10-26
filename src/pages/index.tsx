import { compareDesc } from '@/lib/date';
import { allPosts } from '@/lib/post';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5">
        <section className="pt-6">
          <h2 className="text-3xl font-bold mb-2">Welcome to muung.blog 🥳</h2>
          <p className="mb-2">
            이곳은 개발하면서 경험한 것을 기억하기 위해 기록하는 공간입니다.
          </p>
          <div className="flex gap-3">
            <p>정우석에 대해 더 알고싶다면</p>
            <Link href="/about" target="_blank" className="hover:underline">
              <div className="flex items-center gap-1 text-gray-500 hover:text-gray-900">
                <span>about me</span>
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
