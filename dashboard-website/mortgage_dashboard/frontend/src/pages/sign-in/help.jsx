import React, { Component } from "react";
import logo from '../../logo.jpg'; 
import { Container, Nav, Navbar } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link} from "react-router-dom";

export default class Help extends Component {
  render() {
    return (
      <div className="page-wrapper">
      <div className="Content">
      <div className="SignIn">
        <div style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
        <form>
        <img src={logo} width="200" height="100" alt="MLO Support" />
          <p className="sign-in-topic">Help Options</p>
          <Row>
               <Link to="/" className="info-b">Forgot Username</Link>
          </Row>
            <Row>
              <Link to="/" className="info-b">Forgot Password</Link>
              
          </Row>
          <Row>
              <Link to="/" className="info-b">Contact Us</Link>
            </Row>
            <Row>
            <Link to="/sign-in">
            <button className="btn btn-primary">Back to Sign In</button>
            </Link>
            </Row>
          </form>
          </div>
          <div className="Footer">
          <Navbar className="footer-login-body" variant="dark" fixed="bottom">
        <Container>
          <Nav className="footer-login-links">
            <Nav.Link href="/terms" target="_blank" 
                  rel="noopener noreferrer">Terms of Use</Nav.Link>
            <Nav.Link href="/privacy" target="_blank" 
                  rel="noopener noreferrer">Privacy Policy</Nav.Link>
            <Nav.Link href="/legalthree" target="_blank" 
                  rel="noopener noreferrer">Cookie Policy</Nav.Link>
            <Nav.Link href="/help" target="_blank" 
                  rel="noopener noreferrer">Help</Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Brand className="footer-login-brand">Powered by Liberty Wholesale Mortgage</Navbar.Brand>
          </Nav>
        </Container>
         </Navbar>
          </div>
          </div>
          </div>
          </div>
    );
  }
}



