import React, { useState } from "react";
import logo from "../../logo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { Container, Nav, Navbar } from "react-bootstrap";
import { login } from "../../features/auth/authSlice";

api.defaults.withCredentials = true;

const SignIn = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loading);

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

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  if (isLoading === true) {
    return <h1>"Loading..."</h1>;
  } else {
    return (
      <div className="SignIn">
        <div className="Content">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={(e) => onSubmit(e)}>
          <img src={logo} width="200" height="110" alt="MLO Support" />
            <p>Sign In with a MLO Support Account</p>
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
        <Navbar className="footer-login-body" variant="dark" fixed="bottom">
        <Container>
          <Nav className="footer-login-links">
            <Nav.Link href="/terms" target="_blank" 
                  rel="noopener noreferrer">Terms of Use</Nav.Link>
            <Nav.Link href="/privacy" target="_blank" 
                  rel="noopener noreferrer">Privacy Policy</Nav.Link>
            <Nav.Link href="/legalthree" target="_blank" 
                  rel="noopener noreferrer">Cookie Policy</Nav.Link>
            <Nav.Link href="/legalfour" target="_blank" 
                  rel="noopener noreferrer">Help</Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Brand className="footer-login-brand">Powered by Liberty Wholesale Mortgage</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      </div>
      </div>
      </div>
      
    );
  }
};

export default SignIn;
