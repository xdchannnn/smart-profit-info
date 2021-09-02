import '../../assets/styles/profile.scoped.css';

function ProfileScreen() {
    return(
    <div className="profile_screen">
      <div className="profile_top_block">
        <img src="assets/images/settings-profile.svg" />
        <p className="profile_top_text">Настройки профиля</p>
      </div>
      <div className="profile_user_block">
        <div className="profile_user_content">
          <div className="profile_img_block">
            <img src="assets/images/photo-user.jpg" className="profile_img" />
            <p>
              <button className="profile_img_edit">Изменить</button>
            </p>
          </div>
          <div className="profile_user_items">
            <div className="profile_items_content">
              <div className="profile_user_row">
                <div className="profile_user_item">
                  <p className="profile_user_text">Имя и Фамилия</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Страна</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Новый пароль</p>
                  <input type="text" className="profile_user_input" />
                </div>
              </div>
              <div className="profile_user_row">
                <div className="profile_user_item">
                  <p className="profile_user_text">E-mail</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Telegram</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Повторите новый пароль</p>
                  <input type="text" className="profile_user_input" />
                </div>
              </div>
              <div className="profile_user_row">
                <div className="profile_user_item">
                  <p className="profile_user_text">Skype</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">WhatsApp</p>
                  <input type="text" className="profile_user_input" />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Существующий пароль</p>
                  <input type="text" className="profile_user_input" />
                </div>
              </div>
              <div className="profile_button_block">
                <button className="profile_user_button">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default ProfileScreen;