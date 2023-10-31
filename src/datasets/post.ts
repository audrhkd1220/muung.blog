import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, compareAsc } from '@/lib/date';

export const getAllPosts = () => {
  return allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
};

export const getHomePosts = () => {
  return allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);
};
