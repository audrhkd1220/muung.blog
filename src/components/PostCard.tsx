import { allPosts, Post } from '@/lib/post';
import Link from 'next/link';
import { krDateFormatter } from '@/lib/date';

const PostCard = (post: Post) => {
  return (
    <div className="mb-8">
      <Link href={post.url} className="group">
        <h2 className="group-hover:underline mb-1 text-xl font-semibold">
          {post.title}
        </h2>
        <h3 className="text-l mb-2">{post.description}</h3>
      </Link>
      <div className="flex">
        <div className="flex grow gap-4">
          {post.tags.map((tag) => (
            <Link
              href={post.url}
              className="px-2 py-0.5 bg-[#d4f0f0] rounded-2xl text-gray-900 text-sm hover:bg-[#8FCACA] leading-4"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {krDateFormatter(post.date)}
        </time>
      </div>
    </div>
  );
};

export default PostCard;
