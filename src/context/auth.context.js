import { createContext, useEffect, useState, Fragment } from "react";
import useFetch from "../hooks/useFetch.hook";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  settings: null,
});

export const AuthContextProvider = ({ children }) => {
  const { request, loading } = useFetch();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    (async () => {
      if (token) {
        const result = await request("/user/profile", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        console.log(result);
        if (result) setUser(result.profile_info);
        else setToken(null);
      } else setUser(null);
    })();
  }, [token, request]);

  useEffect(() => {
    (async () => {
      if (token) {
        const result = await request("/settings", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        console.log(result);
        if (result) setSettings(result.data);
        else setToken(null);
      } else setSettings(null);
    })();
  }, [token, request]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  if (loading) return <Fragment />;

  return (
    <AuthContext.Provider value={{ token, setToken, user, settings }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
