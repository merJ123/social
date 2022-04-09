import About from "./About/About";
import Posts from "./Posts/Posts";
import s from "./ProfileContent.module.css";

const ProfileContent = (props) => {
  
  return (
      <div className={s.profile_content}>
          <About />
          <Posts posts={props.posts} 
          dispatch = {props.dispatch} />
      </div>
  );
};

export default ProfileContent;
