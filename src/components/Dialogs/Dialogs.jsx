import React, { createRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  let newMessageElement = createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
            placeholder='Enter your message'
            ref={newMessageElement}
            value={newMessageBody}
            onChange={onNewMessageChange}></textarea>
        </div>
        <div>
          <button onClick={ onSendMessageClick }>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;