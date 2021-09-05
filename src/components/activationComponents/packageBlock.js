import { useContext, useEffect, useState } from "react";
import "../../assets/styles/activation.scoped.css";
import Web3Context from "../../context/web3.context";

function PackageBlock() {
  const [loading, setLoading] = useState(false);
  const { register, connectMetamask } = useContext(Web3Context);

  useEffect(() => {
    connectMetamask();
  }, []);

  const registrate = async (amount) => {
    setLoading(true);
    const price = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
    );
    const result = await price.json();
    const value = amount / result.binancecoin.usd;
    console.log(value);
    register(value, (loaded) => setLoading(!loaded));
  };

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
              disabled={loading}
              onClick={() => registrate(30)}
              className="package_item_button"
            >
              500 BNB
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
              disabled={loading}
              onClick={() => registrate(90)}
              className="package_green_button"
            >
              1 500 BNB
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
              disabled={loading}
              onClick={() => registrate(180)}
              className="package_yellow_button"
            >
              3 000 BNB
            </button>
          </div>
          <div className="angle_bottom_yellow" />
        </div>
      </div>
    </div>
  );
}

export default PackageBlock;
