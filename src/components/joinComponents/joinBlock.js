import '../../assets/styles/login.scoped.css'

function JoinBlock() {
    return(
    <section className="login_block">
      <div className="login_content">
        <div className="login_form_block">
          <form className="login_form">
            <div className="form_header">
              <p className="form_header_title">Станьте частью smart profit</p>
            </div>
            <div className="top_block">
              <img src="assets/images/logo.svg" className="logo_form" />
              <p className="top_text">Ваш спонсор: (server123)</p>
            </div>
            <div className="wallet_input_block">
              <p>
                Логин<span>*</span>
              </p>
              <input
                type="text"
                className="wallet_input"
                placeholder="Введите идентификатор"
              />
            </div>
            <div className="password_input_block">
              <p>
                Электронная почта<span>*</span>
              </p>
              <input
                type="text"
                className="password_input"
                id="password_input"
                placeholder="Введите почту"
              />
            </div>
            <div className="password_input_block">
              <p>
                Телефон<span>*</span>
              </p>
              <input
                type="text"
                className="password_input"
                id="password_input"
                placeholder="Введите номер"
              />
            </div>
            <div className="password_input_block">
              <p>
                Пароль<span>*</span>
              </p>
              <input
                type="text"
                className="password_input"
                id="password_input"
                placeholder="Введите пароль"
              />
            </div>
            <div className="form_footer">
              <p className="data_block">
                <a
                  href="https://smart-profit.info/dashboard.php"
                  className="login_button"
                >
                  Присоединиться
                </a>
              </p>
              <p className="account_prompt">У вас уже есть аккаунт?</p>
              <a
                href="https://smart-profit.info/login.php"
                className="create_link"
              >
                Войдите
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
  }

export default JoinBlock