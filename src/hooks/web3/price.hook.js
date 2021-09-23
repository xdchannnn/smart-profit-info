import { useState } from "react";
import { toast } from "react-toastify";
import contract from "../../utils/contract";

const usePrice = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([]);
  const [latestPrice, setLatestPrice] = useState(0);

  const getPrice = () => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((result) => {
        [30, 90, 180].map((val) => {
          setPrice((price) => [...price, val / result.binancecoin.usd]);
        });
        setLoading(false);
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
        setLoading(false);
      });
  };

  const getLatestPrice = () => {
    setLoading(true);
    contract.methods
      .getLatestPrice()
      .call()
      .then((res) => {
        setLoading(false);
        res =
          res.substring(0, res.length - 8) +
          "." +
          res.substring(res.length - 8, res.length);
        console.log(parseFloat(res));
        setLatestPrice(res);
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
        setLoading(false);
      });
  };

  return { loading, price, getPrice, getLatestPrice, latestPrice };
};

export default usePrice;
