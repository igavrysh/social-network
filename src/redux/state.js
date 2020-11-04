const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
  _state: {
    profilePage: {
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
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Dimych'
        },
        {
          id: 2,
          name: 'Andrey'
        },
        {
          id: 3,
          name: 'Sveta'
        },
        {
          id: 4,
          name: 'Sasha'
        },
        {
          id: 5,
          name: 'Viktor'
        }
      ],
      messages: [
        {
          id: 1,
          message: "Hi"
        },
        {
          id: 2,
          message: "How is your it-kamasutra?"
        },
        {
          id: 3,
          message: "Yo"
        },
        {
          id: 4,
          message: "Yo"
        }
      ],
      newMessageText: 'Hello from California'
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 11,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newText: text
  };
}

export default store;
window.store = store;
