import React, { useState } from "react";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import api from "../../services/api";

api.defaults.withCredentials = true;

const AddUsers = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (re_password === password) {
      register(username, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else if (accountCreated) return <Navigate to="/sign-in" />;

  return (
    <>
      <div className="Header">
        <Navbar />
      </div>
      <div className="Content">
        <div className="container mt-5">
          <h1>Register for an Account</h1>
          <form onSubmit={(e) => onSubmit(e)}>
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
            <button className="btn btn-primary mt-3" type="submit">
              Register
            </button>
          </form>
          <p className="mt-3">
            Already have an Account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(AddUsers);
