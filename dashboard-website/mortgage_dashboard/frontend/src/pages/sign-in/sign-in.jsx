import React, { Component } from "react";
import logo from '../../logo.jpg'; 

export default class SignIn extends Component {
  render() {
    return (<div className="SignIn">
      <form>
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button className="btn btn-primary">Sign In</button>
        <div className="row center">
            <a href="sign-up">Forgot Username or Password</a>
        </div>
      </form>
      <div className="row infoSection">
          <a href="sign-up" className="info">Terms of Use</a>
          <a href="sign-up" className="info">Privacy Policy</a>
      </div>
    </div>);
  }
}



