import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE-ELEMENT' });
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
  }


  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={`${s.dialogs_item} ${s.dialogs_container}`}>
        {dialogsElements}
      </div>
      <div className={`${s.messages} ${s.dialogs_container}`}>
        <div className={s.messageItems}>{messagesElements}</div>

        <div className={s.sendMessage}>
          <textarea
            value={props.state.newMessageText}
            onChange={onMessageChange}
            ref={newMessageElement}
            placeholder="Написать сообщение..."
          ></textarea>
          <button className={s.sendButton} onClick={sendMessage} ></button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
