import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src='https://avatarfiles.alphacoders.com/220/220432.jpg' />
          post 3
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;