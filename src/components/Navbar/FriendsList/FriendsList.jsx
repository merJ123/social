import { NavLink } from "react-router-dom";
import s from "./../Navbar.module.css";



const FriendsList = (props) => {

    return(
    <NavLink to={props.url} className={s.user}>
      <img src={props.img} />
      {props.name}
    </NavLink>
    )
};

export default FriendsList;
