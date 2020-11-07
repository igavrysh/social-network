import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://avatarfiles.alphacoders.com/220/220432.jpg' alt=''/>
        { props.message }
      <div>
        <button onClick={ () => { alert('samuraijs.com') }}>Like</button>{ props.likesCount } 
      </div>
    </div>
  );
}

export default Post;