import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  //let state = props.store.getState().dialogsPage;

  return (
    <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let onSendMessage = () => {
          store.dispatch(sendMessageCreator());
        }
      
        let onNewMessageChange = (body) => {
          let action = updateNewMessageBodyCreator(body);
          store.dispatch(action);
        };

        return <Dialogs 
          dialogsPage = {state.dialogsPage}
          updateNewMessageBody={ onNewMessageChange }
          sendMessage={ onSendMessage } />
      }  
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;