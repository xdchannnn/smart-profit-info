import "../../assets/styles/dashboard.scoped.css";
import blueLogo from "../../assets/images/blue-logo.svg";
import lang from "../../assets/images/lang.svg";
import turnOff from "../../assets/images/turn-off.svg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const { setToken } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };

  const [openLang, setOpenLang] = useState(false)
  const [openTeam, setOpenTeam] = useState(false)

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
              src={blueLogo}
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
                    aria-expanded="true"
                    onClick={() => setOpenTeam(!openTeam)}
                  >
                    {t("header:TOP_DESCRIPTION_TEAM")}
                  </button>
                  <ul className={openTeam === false ? "dropdown-menu close" : "dropdown-menu show"}>
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
                    className="lang_button dropdown-toggle show"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onClick={() => setOpenLang(!openLang)}
                  >
                    <img src={lang} alt="lang_icon" />
                    <p className="lang_text">
                      {currentLang === "ru" ? "Русский" : "English"}
                    </p>
                  </button>
                  <ul className={openLang === false ? "dropdown-menu close" : "dropdown-menu show"}>
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
