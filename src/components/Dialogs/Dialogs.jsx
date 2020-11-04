import React, { createRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

  let newMessageElement = createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = () => {
    props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea 
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}></textarea>
        </div>
        <div>
          <button onClick={ addMessage }>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;