import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div classname={s.posts}>
        <Post message='Hi, how are you?' likesCount='10'/>
        <Post message="It's my first post" likesCount='11'/>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;