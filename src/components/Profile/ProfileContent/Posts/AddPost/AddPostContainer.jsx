import React from "react";
import { addPostElementActionCreator, updateNewPostTextActionCreator } from "../../../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {

  let addPost = () => {
    props.state.dispatch(addPostElementActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.state.dispatch(action)
  }

  return <AddPost updateNewPostText = { onPostChange } 
                    addPost = { addPost } 
                    newPostText = {props.state.state.profilePage.newPostText} />
};

export default AddPostContainer;
