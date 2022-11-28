import React, { useState } from "react";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CSRFToken from "../../components/CSRFToken";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";
import axios from "axios";

axios.defaults.withCredentials = true;

const AddUsers = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (re_password === password) {
      register(username, password, re_password);
      setAccountCreated(true);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="Header">
          <Navbar />
        </div>
        <div className="Content">
          <Container className="page-format">
            <div className="container mt-5">
              <h1>Create an Account</h1>
              <form onSubmit={(e) => onSubmit(e)}>
                <CSRFToken />
                <div className="form-group">
                  <label className="form-label">Username: </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => onChange(e)}
                    value={username}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">Password: </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onChange(e)}
                    value={password}
                    minLength="6"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">Confirm Password: </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    name="re_password"
                    onChange={(e) => onChange(e)}
                    value={re_password}
                    minLength="6"
                    required
                  />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                  Create
                </button>
              </form>
            </div>
          </Container>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(AddUsers);
