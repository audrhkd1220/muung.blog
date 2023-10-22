import Link from 'next/link';
import { compareDesc, krDateFormatter } from '@/lib/date';
import { allPosts, Post } from '@/lib/post';
import Header from '@/components/Header';

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
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-5 h-[1770px]">
      <Header />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
