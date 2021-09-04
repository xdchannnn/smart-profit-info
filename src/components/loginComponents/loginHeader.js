import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";
import lang from "../../assets/images/lang.svg";
import newTurn from "../../assets/images/new-turn.svg";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
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
                  href="https://smart-profit.info/login.php"
                  className="nav-link"
                >
                  <img src={newTurn} alt="turn-off" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default LoginHeader;
