import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
export default class SignIn extends React.Component {
    render() {
      return<div className="container">
        <form>
          <h1>LOGO</h1>
          <h3>Sign In</h3>
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username"/>
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>
          <button className="btn btn-primary">Log In</button>
          <div className="social row">
              <div className="col google"><i class="fab fa-google"></i>  Google</div>
              <div className="col fb"><i class="fab fa-facebook"></i>Facebook</div>
        </div>
      </form>
    </div>
  } 
}



