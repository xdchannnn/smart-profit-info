import { Link } from "react-router-dom";
import decor from "../../assets/images/decor.png";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";
import { useContext, useState, useEffect } from "react";
import ContractContext from "../../context/contract.context";

function StatusBlock() {
  const { t } = useTranslation();

  const { getPrice, loading } = useContext(ContractContext);

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    (async () => {
      const pricesArray = [
        await getPrice(0),
        await getPrice(1),
        await getPrice(2),
      ];
      setPrices(pricesArray);
    })();
  }, []);

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
              <p className="card_description_blue">
                {t("landing:TOP_DESCRIPTION_FROM_STATUS")}
              </p>
            </div>
            <p className="card_price_blue">
              {prices[0] && prices[0].toFixed(5)} BNB
            </p>
            <div className="border_decor_bottom_blue" />
          </div>
          <div className="status_yellow_card">
            <div className="border_decor_yellow position-absolute top-0 end-0" />
            <div className="status_card_content">
              <p className="card_title_yellow">Maxi Profit</p>
              <p className="card_description_blue">
                {t("landing:TOP_DESCRIPTION_DURING")}
              </p>
            </div>
            <p className="card_price_yellow">
              {prices[2] && prices[2].toFixed(5)} BNB
            </p>
            <div className="border_decor_bottom_yellow" />
          </div>
          <div className="status_card">
            <div className="border_decor_green position-absolute top-0 end-0" />
            <div className="status_card_content">
              <p className="card_title_green">Fixed Profit</p>
              <p className="card_description_blue">
                {t("landing:TOP_DESCRIPTION_ACTIVATE")}
              </p>
            </div>
            <p className="card_price_green">
              {prices[1] && prices[1].toFixed(5)} BNB
            </p>
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
