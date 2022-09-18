import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

function NavbarCustom() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MLO Support</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/leads">Leads</Nav.Link>
            <Nav.Link href="/borrowers">Borrowers</Nav.Link>
            <Nav.Link href="/lenders" >Lenders</Nav.Link>
            <Nav.Link href="/resources" >Resources</Nav.Link>
          </Nav> 
        <Nav>
        <Nav.Link href="#" >
           <FontAwesomeIcon icon={Icons.faUser} size="2x" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
