// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'db/db.json';
import { Post } from 'types/Posts.types';

type Data = {
  posts: Post[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ posts: db.posts })
}
