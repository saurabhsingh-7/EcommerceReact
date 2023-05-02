import { createContext, useState } from "react";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  };
  const hdllogout = () => {
    setAuth(false);
  };
  const value = { isAuth, login, hdllogout };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

export default LoginContextProvider;
