import { InferActionsTypes } from "./redux-store";

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
type ActionsType = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE': {
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

export const actions = {
  sendMessageCreator: (newMessageBody: string) => {
    return { 
      type: 'SN/DIALOGS/SEND-MESSAGE',
      newMessageBody
    } as const
  }
}

export default dialogsReducer;
