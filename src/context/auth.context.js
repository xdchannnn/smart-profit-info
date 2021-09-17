import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch.hook";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  settings: null,
  loading: false,
});

export const AuthContextProvider = ({ children }) => {
  const { request } = useFetch();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setLoading(true);
      request("/user/profile", "GET", null, {
        Authorization: `Bearer ${token}`,
      })
        .then((result) => {
          if (result) {
            console.log(result);
            setUser(result.profile_info);
            request("/settings", "GET", null, {
              Authorization: `Bearer ${token}`,
            }).then((result) => {
              if (result) {
                console.log(result);
                setSettings(result.data);
                setLoading(false);
              }
            });
          }
        })
        .catch((e) => {
          toast(e.message, { type: "error" });
          setLoading(false);
          setToken(null);
          setUser(null);
          setSettings(null);
        });
    } else {
      setToken(null);
      setUser(null);
      setSettings(null);
    }
  }, [token, request]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, user, settings, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
