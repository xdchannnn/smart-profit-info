import "../../assets/styles/styles.scoped.css";
import mainLogo from "../../assets/images/main-logo.svg";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();

  return (
    <section className="main_page">
      <div className="main_content">
        <div className="top_text">
          <p className="top_title">{t("landing:TOP_TITLE")}</p>
          <p className="top_description">{t("landing:TOP_DESCRIPTION")}</p>
        </div>
        <div className="color_delimiter" />
        <div className="main_center">
          <img src={mainLogo} alt="main-logo" />
        </div>
        <div className="color_delimiter" />
        <div className="bottom_text">
          <p className="bottom_description">
            {t("landing:TOP_DESCRIPTION_MANY")}
          </p>
          <p className="bottom_title">
            {t("landing:TOP_DESCRIPTION_MANY_YEARS")}
          </p>
        </div>
        <div className="main_banner">
          <p className="main_banner_title">
            {t("landing:TOP_DESCRIPTION_MAXI")}
          </p>
          <p className="main_banner_description">32 540 BNB</p>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
