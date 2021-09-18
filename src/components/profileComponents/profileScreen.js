import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";

import SettingsProfile from "../../assets/images/settings-profile.svg";
import PhotoUser from "../../assets/images/photo-user.jpg";

import "../../assets/styles/profile.scoped.css";
import useFetch from "../../hooks/useFetch.hook";
import Preloader from "../loaders/Preloader";
import { useTranslation } from "react-i18next";

function ProfileScreen() {
  const { t } = useTranslation();

  const fetch = useFetch();
  const { user, settings, token, loading } = useContext(AuthContext);

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

    const result = await fetch.request(
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
    <>
      {loading && <Preloader />}
      <div className="profile_screen">
        <div className="profile_top_block">
          <img src={SettingsProfile} alt="settings-profile" />
          <p className="profile_top_text" style={{ marginBottom: 0 }}>
            {t("profile:TOP_TITLE")}
          </p>
        </div>
        <div className="profile_user_block">
          <div className="profile_user_content">
            <div className="profile_img_block">
              <img src={PhotoUser} className="profile_img" />
              <p>
                <button className="profile_img_edit">
                  {t("profile:TOP_DESCRIPTION_CHANGE")}
                </button>
              </p>
            </div>
            <div className="profile_user_items">
              <div className="profile_items_content">
                <div className="profile_inputs">
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_NAMEANDSURNAME")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_EMAIL")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_SKYPE")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="skype"
                        value={form.skype}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_COUNTRY")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_TELEGRAM")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="telegram"
                        value={form.telegram}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_PHONE")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_NEWPASSWORD")}
                      </p>
                      <input
                        type="password"
                        className="profile_user_input"
                        name="new_password"
                        value={form.new_password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_REPEATNEWPASSWORD")}
                      </p>
                      <input
                        type="password"
                        className="profile_user_input"
                        name="repeat_password"
                        value={form.repeat_password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_EXISTINGPASSWORD")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="old_password"
                        value={form.old_password}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="profile_button_block">
                  <button
                    onClick={handleSave}
                    disabled={fetch.loading}
                    className="profile_user_button"
                  >
                    {t("profile:TOP_DESCRIPTION_SAVE")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
