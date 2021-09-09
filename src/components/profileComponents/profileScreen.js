import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";

import "../../assets/styles/profile.scoped.css";
import useFetch from "../../hooks/useFetch.hook";

function ProfileScreen() {
  const { request, loading, error } = useFetch();
  const { user, settings, token } = useContext(AuthContext);

  const [form, setForm] = useState({
    full_name: "",
    country: "",
    email: "",
    telegram: "",
    skype: "",
    phone: "",
    new_password: undefined,
    repeat_password: "",
    old_password: "",
  });

  useEffect(() => {
    if (user && settings)
      setForm({
        ...form,
        user_id: user.id,
        skype: settings.skype,
        telegram: settings.telegram,
        email: settings.email,
        phone: settings.phone,
        full_name: user.full_name,
        country: settings.country,
        old_password: settings.passwd,
      });
  }, [user, settings]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let [key, value] of Object.entries(
      (({ repeat_password, ...rest }) => rest)(form)
    ))
      formData.append(key, value);

    for (let [key, value] of formData.entries())
      console.log(key + ": " + value);

    const result = await request(
      "/settings",
      "POST",
      { formData },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log(result);
  };

  return (
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
                  <input
                    type="text"
                    className="profile_user_input"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Страна</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="profile_user_row">
                <div className="profile_user_item">
                  <p className="profile_user_text">E-mail</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Telegram</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="telegram"
                    value={form.telegram}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Существующий пароль</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="old_password"
                    value={form.old_password}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Новый пароль</p>
                  <input
                    type="password"
                    className="profile_user_input"
                    name="new_password"
                    value={form.new_password}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">Повторите новый пароль</p>
                  <input
                    type="password"
                    className="profile_user_input"
                    name="repeat_password"
                    value={form.repeat_password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="profile_user_row">
                <div className="profile_user_item">
                  <p className="profile_user_text">Skype</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="skype"
                    value={form.skype}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile_user_item">
                  <p className="profile_user_text">WhatsApp</p>
                  <input
                    type="text"
                    className="profile_user_input"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="profile_button_block">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="profile_user_button"
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
