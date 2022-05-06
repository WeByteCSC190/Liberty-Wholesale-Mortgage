import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
export default class SignUp extends React.Component {
    render() {
      return<div className="container SignUp">
        <form>
          <h1>LOGO</h1>
          <h3>Sign Up</h3>
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username"/>
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button className="btn btn-primary">Sign Up</button>
          <a href=""className="signInLink">Already have an account? Sign In</a>
          <div className="social row">
              <div className="col google"><i className="fab fa-google"></i>  Google</div>
              <div className="col fb"><i className="fab fa-facebook"></i>Facebook</div>
        </div>
      </form>
    </div>
  } 
}



