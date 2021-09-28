import "../../assets/styles/dashboard.scoped.css";
import purpleLogo from "../../assets/images/logo-purple.svg";
import blueLogo from "../../assets/images/logo-blue.svg";
import greenLogo from "../../assets/images/logo-green.svg";
import yellowLogo from "../../assets/images/logo-yellow.svg";
import lang from "../../assets/images/lang.svg";
import turnOffPurple from "../../assets/images/turn-off-purple.svg";
import turnOffBlue from "../../assets/images/turn-off-blue.svg";
import turnOffGreen from "../../assets/images/turn-off-green.svg";
import turnOffYellow from "../../assets/images/turn-off-yellow.svg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const { setToken, settings } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };

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
              src={(() => {
                if (settings) {
                  switch (settings.status) {
                    case "Free":
                      return purpleLogo;
                    case "Start Profit":
                      return blueLogo;
                    case "Fixed Profit":
                      return greenLogo;
                    case "Maxi Profit":
                      return yellowLogo;
                    default:
                      return blueLogo;
                  }
                }
              })()}
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
                <Link to="/dashboard" className="nav-link">
                  {t("header:TOP_TITLE")}
                </Link>
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
                    {t("header:TOP_DESCRIPTION_TEAM")}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/my-team"
                        style={{ paddingLeft: "15px", paddingRight: "0px" }}
                      >
                        {t("header:TOP_DESCRIPTION_MYTEAM")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/general-team"
                        style={{ paddingLeft: "15px", paddingRight: "0px" }}
                      >
                        {t("header:TOP_DESCRIPTION_GENERALTEAM")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/finance" className="nav-link">
                  {t("header:TOP_DESCRIPTION_FINANCE")}
                </Link>
                <div className="rect_border" />
              </li>
              <li className="nav-item">
                <Link to="/FAQ" className="nav-link">
                  {t("header:TOP_DESCRIPTION_FAQ")}
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
                  <ul className={"dropdown-menu"}>
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
                <a
                  onClick={logout}
                  className="nav-link"
                  style={{ margin: "0px 0px 0px 15px", cursor: "pointer" }}
                >
                  <img
                    src={(() => {
                      if (settings) {
                        switch (settings.status) {
                          case "Free":
                            return turnOffPurple;
                          case "Start Profit":
                            return turnOffBlue;
                          case "Fixed Profit":
                            return turnOffGreen;
                          case "Maxi Profit":
                            return turnOffYellow;
                          default:
                            return turnOffBlue;
                        }
                      }
                    })()}
                    alt="turn-off"
                  />
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
