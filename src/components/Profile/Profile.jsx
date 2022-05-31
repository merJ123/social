import s from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileContent from "./ProfileContent/ProfileContent";

const Profile = (props) => {
  
  return (
    <div className="content">
      <ProfileHeader />
      <ProfileContent state={props.state}
                       />
    </div>
  );
};

export default Profile;
