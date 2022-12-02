
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlueLogo from './images/blue_logo.png';
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icons from "@fortawesome/free-solid-svg-icons"
import React, { Fragment } from 'react';
import {logout} from '../actions/auth';
import {connect} from 'react-redux'; 


/* Renders the Navbar */

// export default function NavbarCustom() {
  const NavbarCustom = (isAuthenticated) =>{    

    const authenticatedLinks = (
      <Container className="nav-menu">
        <SwitchPage href="/Add-User">Add User</SwitchPage>
        <SwitchPage href="/Users">Manage</SwitchPage>
        <SwitchPage href="/lendersAdmin">Lenders</SwitchPage>
        <SwitchPage href="/resourcesAdmin" >Resources</SwitchPage>
        <SwitchPage href="/deleted" >Recovery Bin</SwitchPage>
      </Container>
    );
  
    const nonAuthLinks = (
      <Fragment>
        <li className='nav-menu'>
          <NavLink className = 'nav-link' to='/sign-in'>Login</NavLink>
        </li>
        <li className='nav-menu'>
          <NavLink className = 'nav-link' to='/register'>Register</NavLink>
        </li>      
      </Fragment>
    );
  
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar" fixed="top">
      <Container>
      <Navbar.Brand href="/Add-User">
        <img
          src={BlueLogo} //MLO Support Logo
          width="150"
          height="70"
          className="Nav-Logo"
          alt="MLO Support"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='m-auto'>
            {/* <Container>
              <ul className="nav-menu">
                <SwitchPage href="/Add-User">Add TPO</SwitchPage>
                <SwitchPage href="/Users">View TPO</SwitchPage>
                <SwitchPage href="/lendersAdmin">Lenders</SwitchPage>
                <SwitchPage href="/resourcesAdmin" >Resources</SwitchPage>
                <SwitchPage href="/deleted" >Recovery Bin</SwitchPage>
              </ul>
             </Container> */}
  
             {/* <Container className="nav-menu"> */}
             {isAuthenticated ? authenticatedLinks : nonAuthLinks}         
             {/* </Container> */}   
          </Nav>
          
          <Nav>
            <SwitchIcon />
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
  }
  
  // Checks the current page uses css to underline/bold the link on Navbar Menu
  function SwitchPage( {href, children, ...props }) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch( {path: resolvedPath.pathname, end:true} ) 
    return (
      
        <li className={ isActive ? "active" : ""}> 
            <Nav.Link href={href} {...props}>
                {children}
            </Nav.Link>
        </li>
        
    )
  }
  
  // Checks if the navbar is mobile, swaps the icon, and add 2 links to nav-menu
  function SwitchIcon(logout){
  
    // Gets width of web browser
  const [windowDimension, detectWidth] = useState({
    windowWidth: window.innerWidth})

    const detectSize = () => {
      detectWidth({
        windowWidth: window.innerWidth, 
      })
    }
      useEffect(() => {
        window.addEventListener('resize', detectSize)
        return() => {
          window.removeEventListener('resize', detectSize)
          
        }
      }, [windowDimension])
    
  
  
  // Compare width of web broswer and performs action
  if( windowDimension.windowWidth < 992) {
    return (
      <Container className="nav-menu">
      <SwitchPage href="/account">Account</SwitchPage>
      <Nav.Link className='nav-item' onClick={logout} href='#!' >Sign Out</Nav.Link>
      </Container>
      
    );
  } else {
    return(
      <Dropdown>
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
  
        <Dropdown.Menu 
          
        >
          <NavDropdown.Item className="nav-drop-link">
          <Link to="/account">Account</Link>
         </NavDropdown.Item>
  
        <NavDropdown.Item className="nav-drop-link">
          <a className='nav-item' onClick={logout} href='#!'> Sign Out</a>
          {/* <Link onClick={logout} href='#!'>Sign Out</Link> */}
        </NavDropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  }
  
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  export default connect(mapStateToProps,{logout})(NavbarCustom);






















