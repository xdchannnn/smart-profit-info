import "../../assets/styles/forgot.scoped.css";
import logo from "../../assets/images/logo.svg";

function Forgot() {
    return(
    <section className="forgot_block">
      <div className="forgot_content">
        <div className="forgot_form_block">
          <form className="forgot_form">
            <div className="form_header">
              <p className="form_header_title">Восстановить пароль</p>
            </div>
            <div className="top_block">
              <img src={logo} className="logo_form" />
            </div>
            <div className="email_input_block">
              <p>
                Введите ваш Email<span>*</span>
              </p>
              <input
                type="text"
                className="email_input"
                id="email_input"
                placeholder="Введите данные"
              />
            </div>
            <div className="form_footer">
              <p className="data_block">
                <a href="#" className="forgot_button">
                  Отправить
                </a>
              </p>
            </div>
            <div className="forgot_footer">
              <p className="forgot_footer_title">Есть аккаунт?</p>
              <a
                href="https://smart-profit.info/login.php"
                className="forgot_footer_link"
              >
                Войти
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
  }

export default Forgot;