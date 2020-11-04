import React, { createRef } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) => {
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs 
      dialogsPage = {state}
      updateNewMessageBody={ onNewMessageChange }
      sendMessage={ onSendMessage } />
  );
}

export default DialogsContainer;