import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getAllTags, getAllTagsCount, getTagPosts } from '@/datasets/post';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Blog = () => {
  const tags = getAllTags();
  const tagsAllCount = getAllTagsCount();

  const params = useSearchParams();
  const tagname = params.get('tagname');

  useEffect(() => {
    console.log(tagname);
    if (tagname && tagname !== 'all') {
      console.log(getTagPosts(tagname));
    }
  }, [tagname]);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex-1 w-full h-full pt-[70px] mx-auto max-w-3xl px-6 pb-6 lg:max-w-6xl lg:px-5">
        <section className="pt-6">
          <h2 className="text-3xl font-bold mb-2">Tags</h2>
          <p className="mb-2">게시글의 모든 태그들을 보여줍니다.</p>
        </section>
        <section className="flex h-full gap-4 pt-6">
          <Link
            href="/tags?tagname=all"
            className="px-3 py-0.5 bg-sky-100 rounded-lg text-gray-900 text-m hover:bg-sky-200"
          >
            all {`(${tagsAllCount})`}
          </Link>
          {tags.map((tag) => (
            <Link
              key={tag[0]}
              href={`/tags?tagname=${tag[0]}`}
              className="px-3 py-0.5 bg-sky-100 rounded-lg text-gray-900 text-m hover:bg-sky-200"
            >
              {`${tag[0]} (${tag[1]})`}
            </Link>
          ))}
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
