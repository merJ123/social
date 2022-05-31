import AddPost from "./AddPost/AddPost";
import AddPostContainer from "./AddPost/AddPostContainer";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  
  let postsElements = props.state.state.profilePage.posts.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likes} />
  ));
    
  return (
    <div className={s.posts}>
      <AddPostContainer
              state = {props.state} />
      <div className={s.postsColumn}>
        {postsElements}
      </div>
    </div>
  );
};

export default Posts;
