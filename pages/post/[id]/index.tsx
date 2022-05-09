import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Post } from '../../../types/Posts.types';
import postsListCss from '../../../components/PostsList/PostsList.module.scss';

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({
  post
}) => {
  // const router = useRouter();
  // const {id} = router.query;

  return (
    <div className={postsListCss.post}>
      <h1 className={postsListCss.postTitle}>{post.title}</h1>
      <p>{post.body}</p>

      <Link href="/">Go back</Link>
    </div>
  );
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = res.data;

  return {
    props: {
      post
    }
  };
}; */

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = res.data;

  console.log('=== fetched single page id:', id);

  return {
    props: {
      post
    }
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  const posts: Post[] = res.data;

  /**
   * [
   *   {params: {id: "1"}},
   *   {params: {id: "2"}},
   *   ....
   * ]
   */
  const paths = posts.map(post => ( {params: {id: post.id.toString()}} ) );
  console.log('=== paths >', paths);

  const result: GetStaticPathsResult = {
    paths,
    fallback: true
  }

  return result;
};

export default PostPage;