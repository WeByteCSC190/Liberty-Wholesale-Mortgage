import React, { Component } from "react";
import logo from '../../logo.jpg'; 
import Row from 'react-bootstrap/Row';
import { Link} from "react-router-dom";
import FooterLogin from "../../components/FooterLogin";

export default class SignOut extends Component {
  render() {
    return ( 
    <div className="sign-in-content">
      <div className="SignIn"> 
        <div style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
        <form>
        <img src={logo} width="200" height="110" alt="MLO Support" />
          <p className="sign-in-topic">Sign Out</p>
          <Row>
               <p className="info-b">You have successfully signed out from MLO Support</p>
          </Row>
            <Row>
          </Row>
          <Row>
             <p className="info-b"></p>
            </Row>
            <Row>
            <Link to="/sign-in">
            <button className="btn btn-primary">Back to Sign In</button>
            </Link>
            </Row>
          </form>
          </div>
          </div>
          <div className="Footer">
            <FooterLogin />
      </div>
          </div>
    );
  }
}
