// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'db/db.json';
import { Post } from 'types/Posts.types';

type Data = {
  post?: Post,
  success: boolean,
  error?: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query?.id;
  const post = db.posts.find(p => String(p.id) === id);
  
  if(!post) return res.status(404).json({ success: false, error: "Post not found!" });
  
  return res.status(200).json({ post: post, success: true });

}
