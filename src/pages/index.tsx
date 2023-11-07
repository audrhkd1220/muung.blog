import { getHomePosts } from '@/datasets/post';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { roboto } from '@/lib/font';
import RightArrorIcon from '@/components/icons/RightArrowIcon';

const ArrowLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="flex">
      <Link
        href={href}
        className="flex items-center gap-1 text-gray-500 hover:text-gray-900 hover:underline"
      >
        <span className="font-medium">{text}</span>
        <span>
          <RightArrorIcon />
        </span>
      </Link>
    </div>
  );
};

export default function Home() {
  const posts = getHomePosts();

  return (
    <div className={`${roboto.className} w-full h-full flex flex-col`}>
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 pb-6 lg:max-w-6xl lg:px-5">
        <section className="mt-6 p-6 flex bg-sky-100 rounded-2xl">
          <div className="w-[310px] h-[350px] bg-[url('/home/profile.gif')] mr-6 bg-no-repeat bg-[0_-100px] rounded-2xl"></div>
          <div className="grow">
            <h2 className="text-3xl font-bold mb-2">WooSeok Jeong</h2>
            <p className="mb-2 text-xl font-medium">Welcome to muung.blog 🥳</p>
            <p className="mb-2">
              이곳은 개발하면서 경험한 것을 기억하기 위해 기록하는 공간입니다.
            </p>
            <ArrowLink href="/about" text="about me" />
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
          <div className="flex justify-end">
            <div className="flex">
              <ArrowLink href="/blog" text="show more" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
