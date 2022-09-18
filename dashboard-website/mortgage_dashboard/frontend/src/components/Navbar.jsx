import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
     <nav className="Navbar">
        <Link to="/" className="site-logo">
        <img
              src={BlueLogo} //MLO Support Logo
              width="150"
              height="70"
              className="d-inline-block align-top"
              alt="MLO Support"
            />
        </Link>
       
        <ul className="NavbarMenu">
            <SwitchPage to="/dashboard">Dashboard</SwitchPage>
            <SwitchPage to="/leads">Leads</SwitchPage>
            <SwitchPage to="/borrowers">Borrowers</SwitchPage>
            <SwitchPage to="/lenders">Lenders</SwitchPage>
            <SwitchPage to="/resources">Resources</SwitchPage>
        </ul>

        <ul className="NavDropDownButton">
          <NavDropDownButton />
        </ul>
        </nav>
   </>
  );
}

// Checks for current page on Navbar, switches when clicked, and underlines/bold it on Navbar
// Works only for links from NavbarMenu
function SwitchPage( {to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch( {path: resolvedPath.pathname, end:true} ) 
  
  return (
    // Checks the current page uses css to underline/bold the link on Navbar Menu
      <li className={ isActive ? "active" : ""}> 
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

// Button for Right Side of Navbar
// Uses react-bootstrap
function NavDropDownButton() {
  return (
    <>
    <Dropdown className="NavOptions">
      <Dropdown.Toggle variant="success" id="NavDropDownButton">
      <FontAwesomeIcon icon={Icons.faUser} size="2x" />
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













/*

<Navbar className="Navbar" expand="lg">
<Container fluid>
  <Navbar.Brand href="/">
  <img
        src={BlueLogo} //MLO Support Logo
        width="150"
        height="70"
        className="d-inline-block align-top"
        alt="MLO Support"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2"
      style={{ maxHeight: '100px' }}
      navbarScroll>
      <Nav.Link href="/" activeClassName='Navbar-active'>Dashboard</Nav.Link>
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

*/