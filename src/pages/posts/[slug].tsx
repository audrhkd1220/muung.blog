// app/posts/[slug]/page.tsx
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { krDateFormatter } from '@/lib/date';
import { allPosts } from '@/lib/post';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

// SSG(Static Site Generation) 렌더링을 사용하기 위한 getStaticPaths 함수 사용.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        // 마크다운 파일의 파일명을 기반으로 slug 지정.
        slug: _raw.flattenedPath,
      },
    })),

    // 현재 등록된 글 이외의 제목이 전달될경우 404 처리.
    fallback: false,
  };
};

// SSG(Static Site Generation) 렌더링을 사용하기 위한 getStaticProps 함수 사용.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.slug || '');

  // 동적 slug 파라미터를 통해 파일명과 동일한 글을 찾아서 리턴.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) notFound();
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div>
      <Header />
      <article className="prose max-w-3xl pt-[70px] mx-auto lg:max-w-6xl lg:px-5">
        <div className="mb-4 pt-6">
          <h1 className="text-3xl mb-2 font-bold">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-gray-600">
            {krDateFormatter(post?.date)}
          </time>
        </div>
        <hr className='w-full transition-all border-solid border-1 border-neutral-300 my-8' />
        <MDXComponent />
      </article>
      <Footer />
    </div>
  );
};

export default PostLayout;
