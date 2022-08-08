// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'db/db.json';
import { Post } from 'types/Posts.types';

type Data = {
  post: Post
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query?.id;
  const post = db.posts.find(p => String(p.id) === id);
  
  if(!post) throw new Error("post not found");
  
  return res.status(200).json({ post: post });

}
