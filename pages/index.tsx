import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Home from '../components/Home/Home';
import { Post } from '../types/Posts.types';
import db from 'db/db.json';




export interface Props {
  posts: Post[],
}
const HomePage: NextPage<Props> = ({
  posts
}) => {

  console.log('======= posts: length, post[0].title.length', posts.length, posts[0].title.length);

  return (
    <div>

      {/* <Home posts={posts} /> */}
      <h3>Home is here!</h3>

    </div>
  )
}

export const getStaticProps = async () => {
  // const resp = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
  // const data = resp.data;
  const data = db.posts;

  return {
    props: {
      posts: data
    }
  };
};

export default HomePage;
