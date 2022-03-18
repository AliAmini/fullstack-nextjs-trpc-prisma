import Link from 'next/link';
import React, { FC } from 'react';
import { Post } from '../../types/Posts.types';
import css from './PostsList.module.scss';

interface Props {
  post: Post
}
const PostItem: FC<Props> = ({
  post
}) => {

  return (
    <Link href="/post/[id]" as={`/post/${post.id}`}>
      <div className={css.post} key={post.id}>
        <h3 className={css.postTitle}>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
}

export default PostItem;