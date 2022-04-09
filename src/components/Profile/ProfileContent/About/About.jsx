import s from './About.module.css'

const About = () => {
    return (
        <div className={s.about}>
          <div className={s.about_info}>
            <p className={s.title}>Обо мне</p>
            <p className={s.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
          <div className={s.profile_info}>
              <div className={s.private}>
                  <p className={s.private_item}>Приватность</p>
                  <p className={s.profile_info_item}>Открытый профиль</p>
              </div>
              <div className={s.visible}>
                  <p className={s.visible_item}>Видимость</p>
                  <p className={s.profile_info_item}>Виден всем пользователям</p>
              </div>
              <div className={s.location}>
                  <p className={s.location_item}>Нур-Султан, Казахстан</p>
              </div>
          </div>
        </div>
    )
}

export default About;