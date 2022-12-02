import React, { useState } from "react";
import logo from "../../logo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { Container, Nav, Navbar } from "react-bootstrap";
import { login } from "../../features/auth/authSlice";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import FooterLogin from "../../components/FooterLogin";

api.defaults.withCredentials = true;

const RecoverPassword = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loading);
  const failed = useSelector((state) => state.auth.rejected);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const alert = () => {
    if (failed === true) {
      return (
        <div className="rounded-md bg-red-50 p-4 absolute top-10 right-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Incorrect Username or Password
              </h3>
              <div className="mt-2 text-sm text-red-700"></div>
            </div>
          </div>
        </div>
      );
    }
    console.log(failed);
  };

  if (isAuthenticated && formData.username === "admin")
    return <Navigate to="/LendersAdmin" />;
  if (isAuthenticated) return <Navigate to="/dashboard" />;
  else {
    return (
      <div className="page-wrapper">
        <div className="Content">
          <div className="SignIn">
            {alert()}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form onSubmit={(e) => onSubmit(e)}>
                <img src={logo} width="200" height="110" alt="MLO Support" />
                <p className="sign-in-topic">Recover Password</p>
                <p>Please enter your email address to retreve your username</p>
                <div className="center">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={username}
                    required
                  />
                </div>
                <Link to="./ConfirmPassword">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                </Link>
              </form>
            </div>

            <div className="Footer">
              <FooterLogin />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RecoverPassword;
