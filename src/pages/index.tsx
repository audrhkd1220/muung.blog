import Link from 'next/link';
import { compareDesc, krDateFormatter } from '@/lib/date';
import { allPosts, Post } from '@/lib/post';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {krDateFormatter(post.date)}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full pt-[70px] mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5">
        <section className="pt-6">
          <h3>Muung blog에 오신 것을 환영합니다.🥳</h3>
          <div>
            이곳은 개발하면서 경험한 것을 기억하기 위해 기록하는 공간입니다.
          </div>
        </section>
        <section className="pt-6">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
