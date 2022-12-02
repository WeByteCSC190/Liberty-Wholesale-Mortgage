import React, { Component } from "react";
import logo from '../../logo.jpg'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link} from "react-router-dom";
import FooterLogin from "../../components/FooterLogin";

export default class PasswordConfirmation extends Component {
  render() {
    return ( 
    
    <div className="sign-in-content">
      <div className="SignIn"> 
        <div style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
        <form>
        <img src={logo} width="200" height="110" alt="MLO Support" />

            <Row>
                <p> A temporary password has been sent to 
                    your email if it is associated 
                    with a MLO Support account. </p>
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


