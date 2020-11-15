import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likesCount} />
  });

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div classname={s.posts}> 
        {postsElements}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newPostText' 
          component='textarea' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;