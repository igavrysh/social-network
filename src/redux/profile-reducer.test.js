import 
  profileReducer, 
  { 
    addPostActionCreator, 
    deletePost 
  } from './profile-reducer';
import ReactDOM from 'react-dom';
import App from '../App';
import React from 'react';

let state = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      likesCount: 12
    },
    {
      id: 2,
      message: 'Its my first post',
      likesCount: 10
    }
  ],
  profile: null,
  status: ''
};

it('new post should be added', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');


  // 2. action 
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');

  // 2. action 
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action 
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it('after deleting non-existing post id, length of messages should not be decremented', () => {
  // 1. test data
  let action = deletePost(42);

  // 2. action 
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});