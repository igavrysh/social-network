import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likesCount} />
  });

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    alert(text);
  };

  let newPostElement = React.createRef();

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div classname={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;