import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  debugger; 

  return (
    <div className={s.item}>
      <img  src='https://avatarfiles.alphacoders.com/220/220432.jpg' />
        { props.message }
      <div>
        <button>Like</button>{ props.likesCount } 
      </div>
    </div>
  );
}

export default Post;