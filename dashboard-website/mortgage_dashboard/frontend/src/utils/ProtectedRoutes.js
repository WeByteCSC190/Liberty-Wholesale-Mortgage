import React from "react";
import axios from 'axios';
import {useLocation, Navigate, Outlet} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {verify} from "../features/auth/authSlice";

const ProtectedRoutes = () => {
    const location = useLocation();
    // const isLoading = useSelector((state) => state.auth.loading);
    // const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const user = localStorage.getItem('access');
    // if (isLoading === true){
    //     return (
    //         <h1>Loading</h1>
    //     )
    // }
    // else{
        return(
            user
                ? <Outlet />
                : <Navigate to='/sign-in' state={{from: location}} replace />
        )
    // }
}

export default ProtectedRoutes;
