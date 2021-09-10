import "../../assets/styles/dashboard.scoped.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer_content">
        <p className="copyright_text">
          {t("login:TOP_DESCRIPTION_RESERVED")} |
        </p>
        <a
          href="#"
          className="copyright_link"
          data-bs-toggle="modal"
          data-bs-target="#copyright_modal"
        >
          &nbsp;{t("login:TOP_DESCRIPTION_RULES")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
