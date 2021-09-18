import { useState } from "react";
import { toast } from "react-toastify";

const usePrice = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([]);

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

  return { loading, price, getPrice };
};

export default usePrice;
