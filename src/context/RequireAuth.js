import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context";
export const RequireAuth = () => {
  const { auth } = useGlobalContext();
  const location = useLocation();
  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
