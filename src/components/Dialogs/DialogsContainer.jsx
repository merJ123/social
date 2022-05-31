
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { addMessageElementActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let sendMessage = () => {
    props.state.dispatch(addMessageElementActionCreator());
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text)
    props.state.dispatch(action);
  }


  let dialogsElements = props.state.state.dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.state.dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return <Dialogs onMessageChange = {onMessageChange} 
                   sendMessage = {sendMessage} 
                   messagesElements = { messagesElements } 
                   dialogsElements = { dialogsElements } 
                   newMessageText = { props.state.state.dialogsPage.newMessageText } />
};

export default DialogsContainer;
