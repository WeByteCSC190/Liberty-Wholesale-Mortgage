import React, { Component } from "react";
import logo from "../../logo.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class Help extends Component {
  render() {
    return (
      <div className="SignIn">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <img src={logo} alt="logo" />
            <p>Help Options</p>
            <Row>
              <Link to="/" className="info-b">
                Forgot Username
              </Link>
            </Row>
            <Row>
              <Link to="/" className="info-b">
                Forgot Password
              </Link>
            </Row>
            <Row>
              <Link to="/" className="info-b">
                Contact Us
              </Link>
            </Row>
            <Row>
              <Link to="/sign-in">
                <button className="btn btn-primary">Back to Sign In</button>
              </Link>
            </Row>
          </form>
        </div>
        <Row style={{ position: "relative", margin: "50px 0 0 0" }}>
          <Col style={{ padding: "0 2%" }}>
            <Link to="/" style={{ float: "left" }} className="info">
              Terms of Use
            </Link>
            <Link to="/" style={{ float: "left" }} className="info">
              Privacy Policy
            </Link>
          </Col>
          <Col style={{ padding: "0 2%" }}>
            <Link to="/" className="info" style={{ float: "right" }}>
              Help
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
