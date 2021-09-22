import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/styles/login.scoped.css";
import AuthContext from "../../context/auth.context";
import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/images/logo.svg";
import Preloader from "../loaders/Preloader";

function JoinBlock() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { setToken } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [form, setForm] = useState({
    login: "",
    email: "",
    phone: "",
    password: "",
    ref_id: id ? String(id) : "1",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleJoin = async (e) => {
    e.preventDefault();
    const result = await request("/registration", "POST", form);
    if (result) {
      const login = await request("/user/login", "POST", {
        login: form.login,
        password: form.password,
      });
      if (login) {
        localStorage.setItem("token", login.access_token);
        setToken(login.access_token);
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <>
      {loading && <Preloader />}
      <section className="login_block">
        <div className="login_content">
          <div className="login_form_block">
            <form className="login_form" onSubmit={handleJoin}>
              <div className="form_header">
                <p className="form_header_title">{t("join:TOP_TITLE")}</p>
              </div>
              <div className="top_block">
                <img src={Logo} className="logo_form" />
                {id && (
                  <p className="top_text">
                    {t("join:TOP_DESCRIPTION_SPONSOR")} {id}
                  </p>
                )}
              </div>
              <div className="wallet_input_block">
                <p>
                  {t("join:TOP_DESCRIPTION_LOGIN")}
                  <span>*</span>
                </p>
                <input
                  name="login"
                  value={form.login}
                  onChange={handleChange}
                  type="text"
                  className="wallet_input"
                  placeholder={t("join:TOP_DESCRIPTION_ENTER")}
                  required
                />
              </div>
              <div className="password_input_block">
                <p>
                  {t("join:TOP_DESCRIPTION_EMAIL")}
                  <span>*</span>
                </p>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="password_input"
                  id="password_input"
                  placeholder={t("join:TOP_DESCRIPTION_ENTERMAIL")}
                  required
                />
              </div>
              <div className="password_input_block">
                <p>
                  {t("join:TOP_DESCRIPTION_PHONE")}
                  <span>*</span>
                </p>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="password_input"
                  id="password_input"
                  placeholder={t("join:TOP_DESCRIPTION_PHONE1")}
                  required
                />
              </div>
              <div className="password_input_block">
                <p>
                  {t("join:TOP_DESCRIPTION_PASSWORD")}
                  <span>*</span>
                </p>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  className="password_input"
                  id="password_input"
                  placeholder={t("join:TOP_DESCRIPTION_ENTERPASSWORD")}
                  required
                />
              </div>
              <div className="form_footer">
                <p className="data_block">
                  <button
                    className="login_button"
                    type="submit"
                    disabled={loading}
                  >
                    {t("join:TOP_DESCRIPTION_JOIN")}
                  </button>
                </p>
                <p className="account_prompt">
                  {t("join:TOP_DESCRIPTION_ALREADY")}
                </p>
                <Link to={`/login/${id ? id : ""}`} className="create_link">
                  {t("join:TOP_DESCRIPTION_LOGIN1")}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinBlock;
