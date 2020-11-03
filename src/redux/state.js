import { rerenderEntireTree } from "../render";

let state = {
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
    ]
  },
  sidebar: {}
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;