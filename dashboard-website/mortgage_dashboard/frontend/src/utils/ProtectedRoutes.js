import React, { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verify } from "../features/auth/authSlice";
import api from "../services/api";

const ProtectedRoutes = () => {
  // const [isAdmin, setAdmin] = useState(false);
  // const routes = (user) => {
  //   if (!user) {
  //     return <Navigate to="/sign-in" state={{ from: location }} replace />;
  //   }
  //   function getAccount() {
  //     const getAccountUrl = `${process.env.REACT_APP_API_URL}/accounts/users/info`;
  //     api({
  //       method: "GET",
  //       url: getAccountUrl,
  //     })
  //       .then((response) => {
  //         const data = response.data;
  //         setAdmin(data);
  //         console.log(data);
  //         return data;
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           console.log(error.response);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         }
  //       });
  //   }
  // };
  const location = useLocation();
  // const isLoading = useSelector((state) => state.auth.loading);
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = localStorage.getItem("access");
  // if (isLoading === true){
  //     return (
  //         <h1>Loading</h1>
  //     )
  // }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
