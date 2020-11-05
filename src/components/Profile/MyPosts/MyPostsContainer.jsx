import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import store from '../../../redux/redux-store';

const MyPostsContainer = (props) => {
  //let state = props.store.getState();

  return (
    <StoreContext.Consumer> 
    { 
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
      
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return <MyPosts 
          posts={ state.profilePage.posts } 
          newPostText={ state.profilePage.newPostText }
          addPost={ addPost } 
          updateNewPostText={ onPostChange } />
      }
    }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;