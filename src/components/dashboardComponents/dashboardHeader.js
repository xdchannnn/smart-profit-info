import "../../assets/styles/dashboard.scoped.css";
import blueLogo from "../../assets/images/blue-logo.svg";
import lang from "../../assets/images/lang.svg";
import turnOff from "../../assets/images/turn-off.svg";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";

function Header() {
  const { setToken } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://smart-profit.info/">
            <img src={blueLogo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="https://smart-profit.info/dashboard.php"
                  className="nav-link"
                >
                  Главная
                </a>
                <div className="rect_border" />
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button
                    type="button"
                    className="command-dropdown dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Команда
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://smart-profit.info/my-team.php"
                        style={{ paddingLeft: "15px", paddingRight: "0px" }}
                      >
                        Моя команда
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://smart-profit.info/general-team.php"
                        style={{ paddingLeft: "15px", paddingRight: "0px" }}
                      >
                        Общая команда
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  href="https://smart-profit.info/finance.php"
                  className="nav-link"
                >
                  Финансы
                </a>
                <div className="rect_border" />
              </li>
              <li className="nav-item">
                <a
                  href="https://smart-profit.info/FAQ.php"
                  className="nav-link"
                >
                  FAQ
                </a>
                <div className="rect_border" />
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button
                    type="button"
                    className="lang_button dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={lang} alt="lang_icon" />
                    <p className="lang_text">Русский</p>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  onClick={logout}
                  className="nav-link"
                  style={{ margin: "0px 0px 0px 15px", cursor: "pointer" }}
                >
                  <img src={turnOff} alt="turn-off" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
