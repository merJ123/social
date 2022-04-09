import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="#" className={s.logo}>
          <img src="https://www.coloplast.ru/Global/2_Stoma/consumer/images/logo.png" />
          <p>social</p>
        </a>
        <form className={s.search}>
          <input type="text" placeholder="Поиск" />
        </form>
        <div className={s.profile}>
          <div className={s.notification}>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/107/107822.png"
                alt="notification"
              />
            </a>
          </div>
          <div className={s.profile_img}>
            <a href="#">
              <img src="https://i.imgur.com/4yahKLS.jpeg" alt="profile_pic" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
