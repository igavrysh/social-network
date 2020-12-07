const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number 
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha'},
    { id: 5, name: 'Viktor' }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" }
  ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
  return { 
    type: SEND_MESSAGE,
    newMessageBody
  }
};

export default dialogsReducer;
