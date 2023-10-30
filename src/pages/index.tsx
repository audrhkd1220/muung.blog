import { getHomePosts } from '@/datasets/post';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { roboto } from '@/lib/font';
import RightArror from '@/components/icons/RightArrow';

export default function Home() {
  const posts = getHomePosts();

  return (
    <div className={`${roboto.className} w-full h-full flex flex-col`}>
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5">
        <section className="mt-6 p-6 flex bg-[#EDEDED] rounded-2xl">
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
                  <RightArror />
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="pt-6">
          <div className="my-6">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
          <div className="flex justify-end mb-6">
            <div className="flex">
              <Link
                href="/blog"
                className="flex items-center gap-1 text-gray-500 hover:text-gray-900 hover:underline"
              >
                <span className="font-semibold">show more</span>
                <span>
                  <RightArror />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
