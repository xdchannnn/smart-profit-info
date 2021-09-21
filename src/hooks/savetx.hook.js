import { useContext } from "react";
import { useCallback } from "react/cjs/react.development";
import AuthContext from "../context/auth.context";
import useFetch from "./useFetch.hook";

const useSavetx = () => {
  const { token, user } = useContext(AuthContext);
  const { request } = useFetch();

  const savetx = useCallback(
    async (tx_hash) => {
      if (token && user) {
        return await new Promise((resolve, reject) => {
          request(
            "/save-tx",
            "POST",
            { user_id: user.id, tx_hash },
            { Authorization: `Bearer ${token}` }
          )
            .then(resolve)
            .catch(reject);
        });
      }
    },
    [token, user, request]
  );

  return { savetx };
};

export default useSavetx;
