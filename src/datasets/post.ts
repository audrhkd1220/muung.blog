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

export const getAllTags = () => {
  return Array.from(
    allPosts.reduce((acc, post) => {
      post.tags.forEach((tag) => {
        acc.has(tag) ? acc.set(tag, acc.get(tag)! + 1) : acc.set(tag, 1);
      });
      return acc;
    }, new Map<string, number>()),
  );
};

export const getAllTagsCount = () => {
  return allPosts.length;
};

export const getTagPosts = (tag: string) => {
  allPosts.forEach((post) => {
    console.log(post.tags);
  });
  return getAllPosts().filter((post) => post.tags.some((_tag) => _tag === tag));
};
