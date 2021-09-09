import { useCallback, useState } from "react";
import Web3 from "web3";
import { TEST_BINANCE, SmartProfit } from "../../utils/contracts";
import { toast } from "react-toastify";

const web3 = new Web3(
  Web3.givenProvider || new Web3.providers.HttpProvider(TEST_BINANCE)
);

const useContract = () => {
  const [loading, setLoading] = useState(false);
  const contract = new web3.eth.Contract(SmartProfit.abi, SmartProfit.address);

  const getPrice = useCallback(async (place) => {
    setLoading(true);
    return await new Promise((resolve, reject) =>
      contract.methods.prices(place).call({}, (err, res) => {
        if (err) {
          setLoading(false);
          toast(err.message, { type: "error" });
          reject(err);
        } else {
          fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
          )
            .then((data) => data.json())
            .then((result) => {
              setLoading(false);
              resolve(res / result.binancecoin.usd);
            })
            .catch((err) => {
              setLoading(false);
              toast(err.message, { type: "error" });
              reject(err);
            });
        }
      })
    );
  }, []);

  return { getPrice, loading };
};

export default useContract;
