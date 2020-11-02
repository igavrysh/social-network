import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogs = [
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
  ];

  let messages = [
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
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;