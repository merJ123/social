import { NavLink } from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";
import s from "./Navbar.module.css";

const Navbar = (props) => {
let friendsElement = props.state.friends.map( f => (<FriendsList name = {f.firstName} img = {f.img} url = {f.url} />) );

  return (
    <nav className={s.nav}>
      <NavLink
        to="/profile"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_profile}`}>Моя страница</div>
      </NavLink>
      <NavLink
        to="/dialogs"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_message}`}>Сообщения</div>
      </NavLink>
      <NavLink
        to="/news"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_news}`}>Новости</div>
      </NavLink>
      <NavLink
        to="/music"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_music}`}>Музыка</div>
      </NavLink>
      <NavLink
        to="/settings"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_settings}`}>Настройки</div>
      </NavLink>
      <NavLink
        to="/friends"
        className={(navData) => (navData.isActive ? s.active : s.inactive)}
      >
        <div className={`${s.item} ${s.item_friends}`}>Друзья</div>
      </NavLink>
      
      <div className={s.friends_list}>
        {friendsElement}
      </div>
      
      
    </nav>
  );
};

export default Navbar;
