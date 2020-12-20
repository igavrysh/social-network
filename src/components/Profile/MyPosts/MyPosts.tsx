import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm'
import { PostType } from '../../../types/types'

export type MapPropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  console.log("RENDER: My Posts");

  let postsElements = [...props.posts]
    .reverse()
    .map((p) => {
      return <Post 
        key={p.id} 
        message={p.message} 
        likesCount={p.likesCount} />;
    });

  let onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

let MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;
