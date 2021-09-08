import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { SmartProfit } from "../../../utils/contracts";
import AuthContext from "../../../context/auth.context";
import useFetch from "../../useFetch.hook";

const useRegister = ({ metamask, userAddress }) => {
  const { settings, token, user } = useContext(AuthContext);
  const { request } = useFetch();

  const [loading, setLoading] = useState(false);

  const register = useCallback(
    (value) => {
      if (!metamask)
        return toast("Вы не подключенны к кошельку!", { type: "warning" });
      if (!userAddress)
        return toast("Вы не вошли в кошелек!", { type: "warning" });
      if (settings.wallet && settings.wallet !== userAddress)
        return toast("Не верный аккаунт кошелька!", { type: "warning" });

      setLoading(true);

      const contract = new metamask.eth.Contract(
        SmartProfit.abi,
        SmartProfit.address
      );
      contract.methods
        ._register(settings.ref_id || 1)
        .send({
          from: userAddress,
          value: metamask.utils.toWei(String(value)),
        })
        .on("receipt", (receipt) => {
          request(
            "/save-tx",
            "POST",
            {
              user_id: user.id,
              tx_hash: receipt.transactionHash,
            },
            { Authorization: `Bearer ${token}` }
          )
            .then((res) => {
              if (res) {
                setLoading(false);
                toast("Success transaction!", { type: "success" });
              }
            })
            .catch((err) => {
              setLoading(false);
              toast(err.message, { type: "error" });
            });
        })
        .on("error", (err) => {
          setLoading(false);
          toast(err.message, { type: "error" });
        });
    },
    [metamask, userAddress]
  );

  return { loading, register };
};

export default useRegister;
