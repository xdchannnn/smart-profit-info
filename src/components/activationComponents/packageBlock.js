import { Fragment, useContext, useEffect, useState } from "react";
import "../../assets/styles/activation.scoped.css";
import Web3Context from "../../context/web3.context";

function PackageBlock() {
  const {
    register,
    connectMetamask,
    loading,
    priceLoading,
    getPrice,
  } = useContext(Web3Context);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    connectMetamask();
  }, []);

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

  const handleRegister = (index) => prices[index] && register(prices[index]);

  return (
    <div className="package_block">
      <div className="package_top_block">
        <img src="assets/images/web-icon.svg" />
        <p className="package_title">Активируйте один из пакетов</p>
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
              Получайте доход с <span>3 уровней</span> на протяжении{" "}
              <span>60 дней</span>. Откройте новые уровни для дохода
            </p>
            <button
              onClick={() => handleRegister(0)}
              disabled={loading}
              className="package_item_button"
            >
              {prices[0] && prices[0].toFixed(5)} BNB
            </button>
          </div>
          <div className="angle_bottom_blue" />
        </div>

        <div className="package_item">
          <div className="angle_top_green position-absolute top-0 end-0" />
          <div className="package_content">
            <p className="package_green_title">
              <span>Fixed</span> Profit
            </p>
            <div className="rectangle_green" />
            <p className="package_green_text">
              Получайте доход с <span>5 уровней</span> на протяжении{" "}
              <span>180 дней</span>. Откройте новые уровни для дохода
            </p>
            <button
              onClick={() => handleRegister(1)}
              disabled={loading}
              className="package_green_button"
            >
              {prices[1] && prices[1].toFixed(5)} BNB
            </button>
          </div>
          <div className="angle_bottom_green" />
        </div>

        <div className="package_item">
          <div className="angle_top_yellow position-absolute top-0 end-0" />
          <div className="package_content">
            <p className="package_yellow_title">
              <span>Maxi</span> Profit
            </p>
            <div className="rectangle_yellow" />
            <p className="package_yellow_text">
              Получайте доход с <span>7 уровней</span> на протяжении{" "}
              <span>360 дней</span>. А так же <span>«Maxi Bonus»</span>{" "}
              подтвердите статус
            </p>
            <button
              onClick={() => handleRegister(2)}
              disabled={loading}
              className="package_yellow_button"
            >
              {prices[2] && prices[2].toFixed(5)} BNB
            </button>
          </div>
          <div className="angle_bottom_yellow" />
        </div>
      </div>
    </div>
  );
}

export default PackageBlock;
