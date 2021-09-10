import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";
import lang from "../../assets/images/lang.svg";
import newTurn from "../../assets/images/new-turn.svg";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function LoginHeader() {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            />
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
                <Link to="/FAQ" className="nav-link">
                  FAQ
                </Link>
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
                    <p className="lang_text">
                      {currentLang === "ru" ? "Русский" : "English"}
                    </p>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() =>
                          setCurrentLang(currentLang === "ru" ? "en" : "ru")
                        }
                      >
                        {currentLang === "en" ? "Русский" : "English"}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <img src={newTurn} alt="turn-off" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default LoginHeader;
