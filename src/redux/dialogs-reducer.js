const SEND_MESSAGE = 'SEND-MESSAGE';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 11,
        message: state.newMessageBody
      };
      let stateCopy = {...state};
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    } 
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
  };
}

export default dialogsReducer;
