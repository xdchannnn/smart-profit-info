import { useEffect } from "react";
import "../../assets/styles/styles.scoped.css";
import mainLogo from "../../assets/images/main-logo.svg";
import { useTranslation } from "react-i18next";
import Particles from "react-particles-js";

import config from "../../particlesjs-config.json";
import useBonus from "../../hooks/web3/bonus.hook";

import Preloader from "../loaders/Preloader";

function MainPage() {
  const { t } = useTranslation();
  const { loading, getMaxiBonus, maxiBonus } = useBonus();

  useEffect(() => {
    getMaxiBonus();
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <section className="main_page" style={{ position: "relative" }}>
        <Particles style={{ position: "absolute" }} params={config} />
        <div className="main_content">
          <div className="top_text">
            <p className="top_title">{t("landing:TOP_TITLE")}</p>
            <p className="top_description">{t("landing:TOP_DESCRIPTION")} </p>
          </div>
          <div className="color_delimiter" />
          <div className="main_center">
            <img src={mainLogo} alt="main-logo" className="main_logo" />
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
            <p className="main_banner_description">
              {(maxiBonus / Math.pow(10, 18)).toFixed(4)} BNB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
