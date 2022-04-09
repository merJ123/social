import s from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileContent from "./ProfileContent/ProfileContent";

const Profile = (props) => {

  return (
    <div className="content">
      <ProfileHeader />
      <ProfileContent posts={props.state.posts}
                      dispatch = {props.dispatch}  />
    </div>
  );
};

export default Profile;
