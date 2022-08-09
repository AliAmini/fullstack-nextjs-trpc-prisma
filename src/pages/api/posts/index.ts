// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'db/db.json';
import { Post } from 'types/Post';

type Data = {
  posts: Post[],
  success: boolean,
  error?: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ posts: db.posts, success: true })
}
