import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";

const GuardedRoutes = ({ children }: any) => {
  const { state } = useContext(AuthContext);
  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return state?.isLoggedIn ? children : redirectToLogin();
};

export default GuardedRoutes;
