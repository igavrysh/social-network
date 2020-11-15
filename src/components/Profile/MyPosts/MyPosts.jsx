import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

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

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newPostText' 
          component={Textarea}
          placeholder={'Post message'}
          validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;