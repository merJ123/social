import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likes} />
  ));

  return (
    <div className={s.posts}>
      <AddPost dispatch = {props.dispatch}
               newPostText = {props.newPostText} />
      <div className={s.postsColumn}>
        {postsElements}
      </div>
    </div>
  );
};

export default Posts;
