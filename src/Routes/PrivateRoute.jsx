import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(LoginContext);
  if (!isAuth) {
    return <Navigate to={"/users"}></Navigate>;
  }
  return children;
}

export default PrivateRoute;
