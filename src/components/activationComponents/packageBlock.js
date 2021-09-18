import { useEffect } from "react";
import "../../assets/styles/activation.scoped.css";

import { useTranslation } from "react-i18next";

import SP from "../../assets/images/SP.png";
import FP from "../../assets/images/FP.png";
import MP from "../../assets/images/MP.png";
import WebIcon from "../../assets/images/web-icon.svg";
import usePrice from "../../hooks/web3/price.hook";

import Preloader from "../loaders/Preloader";
import usePackage from "../../hooks/web3/userActions/package.hook";

function PackageBlock() {
  const { t } = useTranslation();

  const { loading, price, getPrice } = usePrice();
  const pack = usePackage();

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <>
      {(loading || pack.loading) && <Preloader />}
      <div className="package_block">
        <div className="package_top_block">
          <img src={WebIcon} alt="web-icon" />
          <p className="package_title" style={{ marginBottom: 0 }}>
            {t("activation:TOP_TITLE")}
          </p>
        </div>
        <div className="packages_block">
          <div className="package_item">
            <div className="angle_top_blue position-absolute top-0 end-0" />
            <div className="package_content">
              <p className="package_blue_title">
                <span>Start</span> Profit
              </p>
              <div className="rectangle_blue" />
              <p className="package_blue_text">
                {t("activation:TOP_DESCRIPTION_LEVELS3_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS3_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS3_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS3_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS3_5")}
              </p>
            </div>
            <div className="package_item_button">
              <button onClick={() => price[0] && pack.registrate(price[0])}>
                {price[0] && price[0].toFixed(4)} BNB
              </button>
            </div>
            <div className="angle_bottom_blue" />
            <div className="package_price">
              <img src={SP} alt="fp" />
              <p
                style={{
                  color: "#54cdef",
                }}
              >
                30$
              </p>
            </div>
          </div>

          <div className="package_item">
            <div className="angle_top_green position-absolute top-0 end-0" />
            <div className="package_content">
              <p className="package_green_title">
                <span>Fixed</span> Profit
              </p>
              <div className="rectangle_green" />
              <p className="package_green_text">
                {t("activation:TOP_DESCRIPTION_LEVELS5_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS5_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS5_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS5_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS5_5")}
              </p>
            </div>
            <div className="package_green_button">
              <button onClick={() => price[1] && pack.registrate(price[1])}>
                {price[1] && price[1].toFixed(4)} BNB
              </button>
            </div>
            <div className="angle_bottom_green" />
            <div className="package_price">
              <img src={FP} alt="fp" />
              <p
                style={{
                  color: "#5cd58e",
                }}
              >
                90$
              </p>
            </div>
          </div>

          <div className="package_item">
            <div className="angle_top_yellow position-absolute top-0 end-0" />
            <div className="package_content">
              <p className="package_yellow_title">
                <span>Maxi</span> Profit
              </p>
              <div className="rectangle_yellow" />
              <p className="package_yellow_text">
                {t("activation:TOP_DESCRIPTION_LEVELS7_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS7_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS7_5")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_6")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS7_7")}
              </p>
            </div>
            <div className="package_yellow_button">
              <button onClick={() => price[2] && pack.registrate(price[2])}>
                {price[2] && price[2].toFixed(4)} BNB
              </button>
            </div>
            <div className="angle_bottom_yellow" />
            <div className="package_price">
              <img src={MP} alt="fp" />
              <p
                style={{
                  color: "#f2ca6b",
                }}
              >
                180$
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageBlock;
