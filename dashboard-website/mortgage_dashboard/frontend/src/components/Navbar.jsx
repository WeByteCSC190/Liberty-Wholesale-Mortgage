import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlueLogo from './images/blue_logo.png';
import NavIcon from './images/blue_icon.png'; 
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icons from "@fortawesome/free-solid-svg-icons"

/* Renders the Navbar */
export default function NavbarCustom() {
  return (
    <>
       <Navbar className="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
        <img
          src={BlueLogo} //MLO Support Logo
          width="150"
          height="70"
          className="Nav-Logo"
          alt="MLO Support"
        />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Col className="Nav-Menu"> 
          <Nav
            className="me-auto my-2"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Container className="Nav-Links">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/leads">Leads</Nav.Link>
            <Nav.Link href="/borrowers">Borrowers</Nav.Link>
            <Nav.Link href="/lenders" >Lenders</Nav.Link>
            <Nav.Link href="/resources" >Resources</Nav.Link>
            </Container>
          </Nav> 
          </Col>
        
        <NavDropButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

function NavDropButton() {
  return (
    <>
    <Dropdown className="NavOptions">
      <Dropdown.Toggle variant="success" id="NavDropDownButton">
      <FontAwesomeIcon 
         icon={Icons.faUser} 
         size="2x" 
         />
      </Dropdown.Toggle>

      <Dropdown.Menu className="NavDropdownOptions">
        <Dropdown.Item>
        <Link to="/account">Account</Link>
       </Dropdown.Item>

      <Dropdown.Item>
        <Link to="/sign-out">Sign Out</Link>
      </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

