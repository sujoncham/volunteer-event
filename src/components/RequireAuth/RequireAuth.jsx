/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = localStorage.getItem("userId");
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/welcomeLogin"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }

  return children;
};

export default RequireAuth;
