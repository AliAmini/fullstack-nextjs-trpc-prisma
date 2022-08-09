import React, { FC } from 'react';
import css from './PostsList.module.scss';
import { Post } from '../../types/Post';
import PostItem from './PostItem';

interface Props {
  posts: Post[]
}
const PostsList: FC<Props> = ({
  posts
}) => {

  const postsList = (): JSX.Element[] => {
    return posts.map(post => (
      <PostItem post={post} key={post.id} />
    ))
  };

  return (
    <div className={css.posts}>
      <h1 className={css.title}>Posts</h1>
      
      <div className={css.postsList}>
        {postsList()}
      </div>

    </div>
  );
}

export default PostsList;