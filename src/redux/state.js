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
    ]
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
}

export default state;