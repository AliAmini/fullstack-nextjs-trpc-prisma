import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { ApiUrl } from 'src/config/config';
import { trpc } from '@client/utils/trpc';




export interface Props {
  posts: {}[],
}
const HomePage: NextPage<Props> = ({
  posts,
}) => {
  const trpcData = trpc.useQuery(["users.hello"]);

  // console.log('======= posts: length, post[0].title.length', posts.length, posts[0].title.length);

  return (
    <div>

      {/* <Home posts={posts} /> */}
      <h3>Home is here!</h3>
      <p>TRPC data:</p>
      <code>{JSON.stringify(trpcData)}</code>
      <p>Data: {trpcData.data?.hello}</p>

    </div>
  )
}

export const getStaticProps = async () => {
  // const resp = await axios.get(`${ApiUrl}/posts?_limit=6`);
  // const data = resp.data.posts;


  return {
    props: {
      posts: []/* data */,
    }
  };
};

export default HomePage;
