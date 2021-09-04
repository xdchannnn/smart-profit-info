import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function LoginBlock() {
  const { setToken } = useContext(AuthContext);
  // Loader and error handler required
  const { request, loading, error, clearError } = useFetch();

  const [form, setForm] = useState({ login: "", password: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await request("/user/login", "POST", form);
    if (result) {
      localStorage.setItem("token", result.access_token);
      setToken(result.access_token);
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
          <form className="login_form" onSubmit={handleLogin}>
            <div className="form_header">
              <p className="form_header_title">Доступ к вашей учетной записи</p>
            </div>
            <div className="top_block">
              <img src={logo} className="logo_form" />
            </div>
            <div className="wallet_input_block">
              <p>
                Ваш логин, ID или TRON кошелек<span>*</span>
              </p>
              <input
                name="login"
                value={form.login}
                onChange={handleChange}
                type="text"
                className="wallet_input"
                id="wallet_input"
                placeholder="Введите идентификатор"
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
                placeholder="Введите слово"
              />
            </div>
            <div className="form_footer">
              <p>
                <Link to="/forgot" className="forgot_link">
                  Забыли пароль?
                </Link>
              </p>
              <p className="data_block">
                <button
                  type="submit"
                  className="login_button"
                  disabled={loading}
                >
                  Войти
                </button>
              </p>
              <p className="account_prompt">У вас нет аккаунта?</p>
              <Link to="/join" className="create_link">
                Завести аккаунт
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginBlock;
