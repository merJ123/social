import React from "react";
import s from "./../Posts.module.css";

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST-ELEMENT'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className={"post" + " " + s.addPost}>
      <button className={s.addPostButton} onClick={addPost}>
        Написать пост
      </button>
      <div className={s.addPost_ava}>
        <img src="https://i.imgur.com/4yahKLS.jpeg" alt="avatar" />
      </div>
      <textarea
        placeholder="О чем ты думаешь?"
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
    </div>
  );
};

export default AddPost;
