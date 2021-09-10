import "../../assets/styles/styles.scoped.css";
import telegram from "../../assets/images/telegram.svg";
import contract from "../../assets/images/contract.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="social_media">
        <a
          href={
            i18n.language === "ru"
              ? "https://t.me/SMART_PROFIT_RU"
              : "https://t.me/SMART_PROFIT_ENG"
          }
          target="_blank"
          rel="noreferrer"
        >
          <div className="telegram_block">
            <img src={telegram} alt="telegram" />
            <span>Smart-Profit_{i18n.language}</span>
          </div>
        </a>
        <div className="contract_block">
          <img src={contract} alt="contract" />
          <span>{t("landing:TOP_DESCRIPTION_ADDRESS")}</span>
        </div>
      </div>
      <hr />
      <div className="copyright_block">
        <p className="copyright_text">
          {t("landing:TOP_DESCRIPTION_RIGHTS")} |
        </p>
        <a
          href="#"
          className="copyright_link"
          data-bs-toggle="modal"
          data-bs-target="#copyright_modal"
        >
          &nbsp;{t("landing:TOP_DESCRIPTION_RULES")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
