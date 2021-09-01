import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.hook";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
});

export const AuthContextProvider = ({ children }) => {
  const { request } = useFetch();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      if (token) {
        const result = await request("/user/profile", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (result) setUser(result.profile_info);
        else setToken(null);
      } else setUser(null);
    })();
  }, [token]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
