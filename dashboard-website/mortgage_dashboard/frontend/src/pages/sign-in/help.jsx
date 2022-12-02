import React, { Component } from "react";
import logo from '../../logo.jpg'; 
import Row from 'react-bootstrap/Row';
import { Link} from "react-router-dom";
import FooterLogin from "../../components/FooterLogin";

export default class Help extends Component {
  render() {
    return ( 
    
    <div className="Content">
      <div className="SignIn"> 
        <div style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
        <form>
        <img src={logo} width="200" height="110" alt="MLO Support" />
          <p className="sign-in-topic">Help Options</p>
          <Row>
               <Link to="/username" className="info-b">Forgot Username</Link>
          </Row>
            <Row>
              <Link to="/password" className="info-b">Forgot Password</Link>
          </Row>
          <Row>
              <Link to="/contact-public" className="info-b">Contact Us</Link>
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



