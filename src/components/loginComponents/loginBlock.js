import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";

function LoginBlock() {
  const { setToken } = useContext(AuthContext);
  // Loader and error handler required
  const { request, loading, error } = useFetch();

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

  return (
    <section className="login_block">
      <div className="login_content">
        <div className="login_form_block">
          <form className="login_form">
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
                type="text"
                className="password_input"
                id="password_input"
                placeholder="Введите слово"
              />
            </div>
            <div className="form_footer">
              <p>
                <a
                  href="https://smart-profit.info/forgot.php"
                  className="forgot_link"
                >
                  Забыли пароль?
                </a>
              </p>
              <p className="data_block">
                <a
                  // href="https://smart-profit.info/dashboard.php"
                  onClick={handleLogin}
                  className="login_button"
                >
                  Войти
                </a>
              </p>
              <p className="account_prompt">У вас нет аккаунта?</p>
              <a
                href="https://smart-profit.info/join.php"
                className="create_link"
              >
                Завести аккаунт
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginBlock;
