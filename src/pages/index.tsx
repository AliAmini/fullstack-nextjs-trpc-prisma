import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Home from '../components/Home/Home';
import { Post } from '../types/Post';
import db from 'db/db.json';
import { ApiUrl } from 'config/config';




export interface Props {
  posts: Post[],
}
const HomePage: NextPage<Props> = ({
  posts
}) => {

  console.log('======= posts: length, post[0].title.length', posts.length, posts[0].title.length);

  return (
    <div>

      <Home posts={posts} />
      {/* <h3>Home is here!</h3> */}

    </div>
  )
}

export const getStaticProps = async () => {
  const resp = await axios.get(`${ApiUrl}/posts?_limit=6`);
  const data = resp.data.posts;


  return {
    props: {
      posts: data
    }
  };
};

export default HomePage;
