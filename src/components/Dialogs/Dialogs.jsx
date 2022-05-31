import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.onMessageChange(text);
  }




  return (
    <div className={s.dialogs}>
      <div className={`${s.dialogs_item} ${s.dialogs_container}`}>
        {props.dialogsElements}
      </div>
      <div className={`${s.messages} ${s.dialogs_container}`}>
        <div className={s.messageItems}>
          {props.messagesElements}
        </div>

        <div className={s.sendMessage}>
          <textarea
            value={props.newMessageText}
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
