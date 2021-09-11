import { Link } from "react-router-dom";
import decor from "../../assets/images/decor.png";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";

import SP from "../../assets/images/SP.png";
import MP from "../../assets/images/MP.png";
import FP from "../../assets/images/FP.png";

function StatusBlock() {
  const { t } = useTranslation();

  return (
    <section className="status_block">
      <div className="status_content">
        <p className="status_title">{t("landing:TOP_DESCRIPTION_STATUS")}</p>
        <img src={decor} alt="decor-icon" />
        <div className="cards_group">
          <div className="status_card">
            <div className="border_decor_blue position-absolute top-0 end-0" />
            <div className="status_card_content">
              <p className="card_title_blue">Start Profit</p>
              <p className="card_description_blue" style={{ height: 230 }}>
                {t("landing:TOP_DESCRIPTION_FROM_STATUS")}
              </p>
            </div>
            <div className="card_price_info">
              <img src={SP} height={65} />
              <p
                className="card_price_blue"
                style={{ position: "absolute", margin: 0 }}
              >
                30$ BNB
              </p>
            </div>
            <div className="border_decor_bottom_blue" />
          </div>
          <div className="status_yellow_card">
            <div className="border_decor_yellow position-absolute top-0 end-0" />
            <div className="status_card_content">
              <p className="card_title_yellow">Maxi Profit</p>
              <p className="card_description_blue" style={{ minHeight: 250 }}>
                {t("landing:TOP_DESCRIPTION_DURING")}
              </p>
            </div>
            <div className="card_price_info">
              <img src={MP} height={65} />
              <p
                className="card_price_yellow"
                style={{ position: "absolute", margin: 0 }}
              >
                180$ BNB
              </p>
            </div>
            <div className="border_decor_bottom_yellow" />
          </div>
          <div className="status_card">
            <div className="border_decor_green position-absolute top-0 end-0" />
            <div className="status_card_content">
              <p className="card_title_green">Fixed Profit</p>
              <p className="card_description_blue" style={{ height: 230 }}>
                {t("landing:TOP_DESCRIPTION_ACTIVATE")}
              </p>
            </div>
            <div className="card_price_info">
              <img src={FP} height={65} />
              <p
                className="card_price_green"
                style={{ position: "absolute", margin: 0 }}
              >
                90$ BNB
              </p>
            </div>
            <div className="border_decor_bottom_green" />
          </div>
        </div>
        <div className="over_block">
          <Link to="/join" className="over_button">
            {t("landing:TOP_DESCRIPTION_JOIN")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StatusBlock;
