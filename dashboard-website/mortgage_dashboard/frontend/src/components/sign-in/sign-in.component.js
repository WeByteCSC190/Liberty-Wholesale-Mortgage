import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
// import { Link } from "react-router-dom";

export default class SignIn extends Component {
    render() {
      return (<div className="container">
        <form>
          <h1>LOGO</h1>
          <h3>Sign In</h3>
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button className="btn btn-primary">Sign In</button>
          <a href="" className="signUpLink">You don't have an account? Sign Up </a>
          {/* <Link to="/signIn">Sign Up</Link> */}
          <div className="social row">
            <div className="col google"><i className="fab fa-google"></i>  Google</div>
            <div className="col fb">
                <i className="fab fa-facebook">
                  <a href="{% url 'social:begin' 'facebook' %}">Login with Facebook</a>
                </i>Facebook
            </div>
          </div>
        </form>
      </div>);
  } 
}



