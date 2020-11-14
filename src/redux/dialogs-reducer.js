const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 11,
        message: action.newMessageBody
      };
      return {
        ...state,
        messages: [ 
          ...state.messages,
        newMessage]
      };
    }
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => {
  return { 
    type: SEND_MESSAGE,
    newMessageBody
  }
};

export default dialogsReducer;
