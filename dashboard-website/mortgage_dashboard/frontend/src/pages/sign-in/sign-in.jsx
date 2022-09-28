import React, { Component } from "react";
import logo from '../../logo.jpg'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link} from "react-router-dom";

export default class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <div style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
        <form>
            <img src={logo} alt="logo" />
            <p>Sign In with a MLO Support Account</p>
          <div className="center">
            <input type="text" placeholder="Username" id="username" />
          </div>
          <div className="center">
            <input type="password" placeholder="Password" id="password" />
          </div>
          <button className="btn btn-primary">Sign In</button>
          <Row>
              <a href="sign-up">Forgot Username or Password</a>
          </Row>
          </form>
          </div>
        <Row style={{ position: "relative",  margin: '50px 0 0 0' }}>
          <Col style={{ padding: '0 2%' }}>
            <Link to="/terms" style={{ float: 'left' }} className="info">
            Terms of Use
            </Link>
            <Link to="/privacy" style={{ float: 'left' }} className="info">
            Privacy Policy
            </Link>
          </Col>
          <Col style={{ padding: '0 2%' }} >
            <Link to="/Help" className="info" style={{ float: 'right' }}>
              Help
            </Link>
          </Col >
        </Row>
          </div>
    );
  }
}



