import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../../context/auth.context";
import { connectWallet } from "../../../utils/contract";
import useFetch from "../../useFetch.hook";

const usePackage = () => {
  const { settings, token } = useContext(AuthContext);
  const { request } = useFetch();

  const [loading, setLoading] = useState(false);

  const sendTx = useCallback(
    (receipt) => {
      if (token && settings)
        request(
          "/save-tx",
          "POST",
          {
            user_id: settings.id,
            tx_hash: receipt.transactionHash,
          },
          { Authorization: `Bearer ${token}` }
        )
          .then((res) => {
            if (res) {
              setLoading(false);
              toast("Success transaction!", {
                type: "success",
              });
            }
          })
          .catch((e) => {
            setLoading(false);
            toast(e.message, { type: "error" });
          });
    },
    [token, settings]
  );

  const register = useCallback(
    (wallet, contract, price) => {
      contract.methods
        ._register(Number(settings.ref_id || 0))
        .send({
          value: wallet.utils.toWei(String(price)),
        })
        .on("receipt", (receipt) => sendTx(receipt))
        .on("error", (err) => {
          setLoading(false);
          toast(err.message, { type: "error" });
        });
    },
    [settings, token]
  );

  const support = useCallback(
    (wallet, contract, price) => {
      contract.methods
        ._support(
          Number(settings.ref_id || 0),
          Number(localStorage.getItem("partner"))
        )
        .send({
          value: wallet.utils.toWei(String(price)),
        })
        .on("receipt", (receipt) => sendTx(receipt))
        .on("error", (err) => {
          setLoading(false);
          toast(err.message, { type: "error" });
        });
    },
    [settings, token]
  );

  const update = useCallback(
    (wallet, contract, price) => {
      contract.methods
        ._update(Number(settings.contract_id))
        .send({
          value: wallet.utils.toWei(String(price)),
        })
        .on("receipt", (receipt) => sendTx(receipt))
        .on("error", (err) => {
          setLoading(false);
          toast(err.message, { type: "error" });
        });
    },
    [settings, token]
  );

  const buyPackage = useCallback(
    (price) => {
      if (settings && token) {
        setLoading(true);
        connectWallet(settings.wallet)
          .then(({ wallet, contract }) => {
            if (settings.expire) {
              update(wallet, contract, price);
            } else {
              if (localStorage.getItem("partner"))
                support(wallet, contract, price);
              else register(wallet, contract, price);
            }
          })
          .catch((e) => {
            setLoading(false);
            toast(e.message, { type: "error" });
          });
      }
    },
    [register]
  );

  return { loading, buyPackage };
};

export default usePackage;
