import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
