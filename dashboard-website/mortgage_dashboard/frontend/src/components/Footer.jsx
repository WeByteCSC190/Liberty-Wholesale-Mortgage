import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Footer() {
    return (
    <>
    <br></br>
    <Navbar className="footer-body" bg="dark" variant="dark">
        <Container className="footer-menu">
          <Nav>
            <Nav.Link href="/terms" target="_blank" 
                  rel="noopener noreferrer">Terms of Use</Nav.Link>
            <Nav.Link href="/privacy" target="_blank" 
                  rel="noopener noreferrer">Privacy Policy</Nav.Link>
            <Nav.Link href="/legalthree" target="_blank" 
                  rel="noopener noreferrer">Legal Link 3</Nav.Link>
            <Nav.Link href="/legalfour" target="_blank" 
                  rel="noopener noreferrer">Legal Link 4</Nav.Link>
          </Nav>
          <Navbar.Brand className="footer-brand" href="#home">Powered by Liberty Wholesale Mortgage</Navbar.Brand>
        </Container>
      </Navbar>
    </>
    )
}
