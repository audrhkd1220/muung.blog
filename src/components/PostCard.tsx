import { allPosts, Post } from '@/lib/post';
import Link from 'next/link';
import { krDateFormatter } from '@/lib/date';

const PostCard = (post: Post) => {
  console.log(post);
  return (
    <div className="mb-8">
      <Link
        href={post.url}
        className="text-black hover:text-blue-900 dark:text-blue-400"
      >
        <h2 className="mb-1 text-2xl text-bold">{post.title}</h2>
      </Link>
      <h3 className="text-xl">{post.description}</h3>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {krDateFormatter(post.date)}
      </time>
    </div>
  );
};

export default PostCard;
