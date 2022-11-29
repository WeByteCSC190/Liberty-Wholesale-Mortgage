import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function FooterLogin() {
    return (
    <>
   <Navbar className="footer-login-body" variant="dark" fixed="bottom">
        <Container>
          <Nav className="footer-login-links">
            <Nav.Link href="/terms" target="_blank" 
                  rel="noopener noreferrer">Terms of Use</Nav.Link>
            <Nav.Link href="/privacy" target="_blank" 
                  rel="noopener noreferrer">Privacy Policy</Nav.Link>
            <Nav.Link href="/legalthree" target="_blank" 
                  rel="noopener noreferrer">Cookie Policy</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Brand className="footer-login-brand">Powered by Liberty Wholesale Mortgage</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}