import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("abdb@#19330rfkrk");

  const isAuth = (username) => {
    setAuth(true);
    setToken(username+Date.now());
  };

  const value = { token, auth, isAuth };
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
