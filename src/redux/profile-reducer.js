import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
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
  newPostText: 'it-kamasutra.com',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
}
export const setStatus = (status) => ({type: SET_STATUS, status: status});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(profile => {
        dispatch(setUserProfile(profile))
      });
  }
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data));
      }
    });
}

export default profileReducer;