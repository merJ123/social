import s from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
      <div className={s.content}>
        <div className={s.main_info}>
          <div className={s.background_img}>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
          </div>
          <div>
            <div className={s.user_info}>
              <div className={s.profile_img}>
                <img src="https://i.imgur.com/4yahKLS.jpeg" alt="" />
              </div>
              <div className={s.right}>
                <div className={s.user_name}>
                  <p>User User</p>
                  <p>email@email.com</p>
                </div>

                <div className={s.communication}>
                  <a href="#" className={s.communication_buttons}>
                    Отпрвить запрос
                  </a>
                  <a href="#" className={s.communication_buttons}>
                    <img
                      src="https://i.imgur.com/DYvcjlu_d.webp?maxwidth=760&fidelity=grand"
                      alt=""
                    />
                  </a>
                  <a href="#" className={s.communication_buttons}>
                    <img
                      src="https://i.imgur.com/i1ZmIWQ_d.webp?maxwidth=760&fidelity=grand"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileHeader;
