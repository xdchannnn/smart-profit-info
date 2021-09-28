import { Link, useParams } from "react-router-dom";
import decor from "../../assets/images/decor.png";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";

import SP from "../../assets/images/SP.png";
import MP from "../../assets/images/MP.png";
import FP from "../../assets/images/FP.png";

function StatusBlock() {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <section className="status_block">
      <div className="status_content">
        <p className="status_title">{t("landing:TOP_DESCRIPTION_STATUS")}</p>
        <img src={decor} alt="decor-icon" />
        <div className="cards_group">
          <div className="status_card">
            <div className="border_decor_blue" />
            <div className="card_title_blue">Start Profit</div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_FROM_STATUS")}
            </div>
            <div style={{ position: "relative" }}>
              <div className="border_decor_bottom_blue" />
              <div className="card_price_info">
                <img src={SP} alt="sp" height={65} />
                <p className="card_price_blue">30$ BNB</p>
              </div>
            </div>
          </div>
          <div className="status_yellow_card">
            <div className="border_decor_yellow" />
            <div className="card_title_yellow">Maxi Profit</div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_DURING")}
            </div>
            <div style={{ position: "relative" }}>
              <div className="border_decor_bottom_yellow" />
              <div className="card_price_info">
                <img src={MP} alt="Mp" height={65} />
                <p className="card_price_yellow">180$ BNB</p>
              </div>
            </div>
          </div>
          <div className="status_card">
            <div className="border_decor_green" />
            <div className="card_title_green">Fixed Profit</div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_ACTIVATE")}
            </div>
            <div style={{ position: "relative" }}>
              <div className="border_decor_bottom_green" />
              <div className="card_price_info">
                <img src={FP} alt="fp" height={65} />
                <p className="card_price_green">90$ BNB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="over_block">
          <Link to={`/join/${id ? id : ""}`} className="over_button">
            {t("landing:TOP_DESCRIPTION_JOIN")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StatusBlock;
