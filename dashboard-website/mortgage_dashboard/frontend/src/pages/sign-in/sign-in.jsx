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

api.defaults.withCredentials = true;

const SignIn = () => {
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
                <p className="sign-in-message">
                  Sign In with a MLO Support Account
                </p>
                <div className="center">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => onChange(e)}
                    value={username}
                    required
                  />
                </div>
                <div className="center">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onChange(e)}
                    value={password}
                    minLength="6"
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Sign In
                </button>
                <Row>
                  <a href="sign-up">Forgot Username or Password</a>
                </Row>
              </form>
            </div>

            <div className="Footer">
              <Navbar
                className="footer-login-body"
                variant="dark"
                fixed="bottom"
              >
                <Container>
                  <Nav className="footer-login-links">
                    <Nav.Link
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Use
                    </Nav.Link>
                    <Nav.Link
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Nav.Link>
                    <Nav.Link
                      href="/legalthree"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cookie Policy
                    </Nav.Link>
                    <Nav.Link
                      href="/help"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Help
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Navbar.Brand className="footer-login-brand">
                      Powered by Liberty Wholesale Mortgage
                    </Navbar.Brand>
                  </Nav>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
