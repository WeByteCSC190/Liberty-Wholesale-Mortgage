import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlueLogo from './images/blue_logo.png';
import NavIcon from './images/blue_icon.png'; 
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icons from "@fortawesome/free-solid-svg-icons"
import React, { Fragment } from 'react';
import {Logout} from '../features/auth/authSlice';
import {connect} from 'react-redux'; 

/* Renders the Navbar */

// export default function NavbarCustom() {
const NavbarCustom = (isAuthenticated) =>{    

  const authenticatedLinks = (
    <Container className="Nav-Menu">
      <SwitchPage href="/">Dashboard</SwitchPage>
      <SwitchPage href="/leads">Leads</SwitchPage>
      <SwitchPage href="/borrowers">Borrowers</SwitchPage>
      <SwitchPage href="/lenders" >Lenders</SwitchPage>
      <SwitchPage href="/resources" >Resources</SwitchPage>
    </Container>
  );

  const nonAuthLinks = (
    <Fragment>
      <li className='Nav-Menu'>
        <NavLink className = 'nav-link' to='/sign-in'>Login</NavLink>
      </li>
      <li className='Nav-Menu'>
        <NavLink className = 'nav-link' to='/register'>Register</NavLink>
      </li>      
    </Fragment>
  );

  return (
    <>
      <Navbar className="Navbar" expand="lg">
      <Container fluid>
        
        <Col>
        <Navbar.Brand href="/">
        <img
          src={BlueLogo} //MLO Support Logo
          width="150"
          height="70"
          className="Nav-Logo"
          alt="MLO Support"
        />
        </Navbar.Brand>
       </Col>

        <Navbar.Toggle 
          variant="outline-primary"
          style={{
            color: 'white', 
            background: 'white',
        }}
          aria-controls="navbarScroll" 
        />
        <Navbar.Collapse variant="primary" id="navbarScroll">
         
          <Nav
            className="me-auto my-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            
           <Container>
            <ul className="Nav-Menu">
            <SwitchPage href="/">Dashboard</SwitchPage>
            <SwitchPage href="/leads">Leads</SwitchPage>
            <SwitchPage href="/borrowers">Borrowers</SwitchPage>
            <SwitchPage href="/lenders" >Lenders</SwitchPage>
            <SwitchPage href="/resources" >Resources</SwitchPage>
            </ul>
           </Container>

           {/* <Container className="Nav-Menu"> */}
           {/* {isAuthenticated ? authenticatedLinks : nonAuthLinks}          */}
           {/* </Container> */}           
           
         </Nav>
          <NavDropButton />
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  );
}


function SwitchPage( {href, children, ...props }) {
  const resolvedPath = useResolvedPath(href)
  const isActive = useMatch( {path: resolvedPath.pathname, end:true} ) 
  return (
    // Checks the current page uses css to underline/bold the link on Navbar Menu
      <li className={ isActive ? "active" : ""}> 
          <Nav.Link href={href} {...props}>
              {children}
          </Nav.Link>
      </li>
      
  )
}

function NavDropButton(Logout) {
  return (
    <>
    <Dropdown className="NavOptions">
      <Dropdown.Toggle 
         variant="outline-primary" 
         style={{color: 'white', border: 0,}}
         id="NavDropDownButton"
      >
      <FontAwesomeIcon 
         icon={Icons.faUser} 
         size="2x" 
       />
      
      </Dropdown.Toggle>

      <Dropdown.Menu className="NavDropMenu"
        style={{ 
          right: 0, 
          left: 'auto',
          color: 'white',
          border: 0,  }}
      >
        <Dropdown.Item className="Drop-Item">
        <Link to="/account">Account</Link>
       </Dropdown.Item>

      <Dropdown.Item className="Drop-Item">
        <a className='nav-item' onClick={Logout} href='#!' >Sign Out</a>
        {/* <Link onClick={Logout} href='#!'>Sign Out</Link> */}
      </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}




const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{Logout})(NavbarCustom);


