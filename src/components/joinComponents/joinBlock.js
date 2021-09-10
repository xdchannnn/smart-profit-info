import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/login.scoped.css";
import AuthContext from "../../context/auth.context";
import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";

import Logo from "../../assets/images/logo.svg";

function JoinBlock() {
  const { setToken } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [form, setForm] = useState({
    login: "",
    email: "",
    phone: "",
    password: "",
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
    <section className="login_block">
      <div className="login_content">
        <div className="login_form_block">
          <form className="login_form" onSubmit={handleJoin}>
            <div className="form_header">
              <p className="form_header_title">Станьте частью smart profit</p>
            </div>
            <div className="top_block">
              <img src={Logo} className="logo_form" />
              <p className="top_text">Ваш спонсор: (server123)</p>
            </div>
            <div className="wallet_input_block">
              <p>
                Логин<span>*</span>
              </p>
              <input
                name="login"
                value={form.login}
                onChange={handleChange}
                type="text"
                className="wallet_input"
                placeholder="Введите идентификатор"
                required
              />
            </div>
            <div className="password_input_block">
              <p>
                Электронная почта<span>*</span>
              </p>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="password_input"
                id="password_input"
                placeholder="Введите почту"
                required
              />
            </div>
            <div className="password_input_block">
              <p>
                Телефон<span>*</span>
              </p>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                className="password_input"
                id="password_input"
                placeholder="Введите номер"
                required
              />
            </div>
            <div className="password_input_block">
              <p>
                Пароль<span>*</span>
              </p>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                className="password_input"
                id="password_input"
                placeholder="Введите пароль"
                required
              />
            </div>
            <div className="form_footer">
              <p className="data_block">
                <button
                  disabled={loading}
                  className="login_button"
                  type="submit"
                >
                  Присоединиться
                </button>
              </p>
              <p className="account_prompt">У вас уже есть аккаунт?</p>
              <Link to="/login" className="create_link">
                Войдите
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinBlock;
