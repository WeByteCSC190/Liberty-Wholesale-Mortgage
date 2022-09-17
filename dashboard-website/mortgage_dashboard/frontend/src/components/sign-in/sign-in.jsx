import React, { Component } from "react";
import '../sign-in/sign-in.css';
import logo from '../../logo.jpg'; 

export default class SignIn extends Component {
  render() {
    return (<div className="SignIn">
      <form>
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button className="btn btn-primary">Sign In</button>
        <div className="row" style={{ marginTop: 40 }}>
          <div className="col">
            <a href="sign-up" style={{float:"left"}} className="signInLink">Create Account</a>
          </div>
          <div className="col">
            <a href="sign-up" style={{float:"right"}} className="signInLink">Need Help</a>
          </div>
        </div>
      </form>
    </div>);
  }
}



