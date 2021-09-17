import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../../context/auth.context";
import useFetch from "../../useFetch.hook";
import { connectWallet } from "../../../utils/contracts";

const useRegister = () => {
  const { settings, token, user } = useContext(AuthContext);
  const { request } = useFetch();

  const [loading, setLoading] = useState(false);

  const register = useCallback((value) => {
    setLoading(true);

    connectWallet()
      .then(({ wallet, contract }) => {
        firstRegistration(wallet, contract, value);
      })
      .catch((e) => {
        setLoading(false);
        toast(e.message, { type: "error" });
      });
  }, []);

  const firstRegistration = (wallet, contract, value) =>
    contract.methods
      ._register(7)
      .send({
        value: wallet.utils.toWei(String(value)),
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
              toast("Success transaction!", {
                type: "success",
              });
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

  return { loading, register };
};

export default useRegister;
