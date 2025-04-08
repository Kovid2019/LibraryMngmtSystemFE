import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  //Real User data
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? children : <Navigate to="/login" />;
};
