import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlueLogo from './images/blue_logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icons from "@fortawesome/free-solid-svg-icons"
import React, { Fragment } from 'react';
import {logout} from '../actions/auth';


/* Renders the Navbar */

// export default function NavbarCustom() {
  const NavbarCustom = (isAuthenticated) =>{    

    const authenticatedLinks = (
      <Container className="nav-menu">
        <SwitchPage href="/Add-User">Add TPO</SwitchPage>
        <SwitchPage href="/Users">View TPO</SwitchPage>
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
      <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar">
      <Container>
      <Navbar.Brand href="/">
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
  
    //temp code
    const isMobile = false
    //end of temp code
  
    /*
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
  
    useLayoutEffect(() => {
      setWidth(ref.current.offsetWidth);
      console.log(width);
    }, []); */
  
    // compare width of web broswer 
    if(isMobile == false) {
      return (
        <>
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
            style={{ 
              right: 0, 
              left: 'auto',
              color: 'black',
              border: 0,  }}
          >
            <Dropdown.Item className="nav-drop-link">
            <Link to="/account">Account</Link>
           </Dropdown.Item>
    
          <Dropdown.Item className="nav-drop-link">
            <a className='nav-item' onClick={logout} href='#!'> Sign Out</a>
            {/* <Link onClick={logout} href='#!'>Sign Out</Link> */}
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </>
      );
    } else {
      return(
        <>
        <Container className="nav-menu">
        <Nav.Link href="/account">Account</Nav.Link>
        <Nav.Link className='nav-item' onClick={logout} href='#!' >Sign Out</Nav.Link>
        </Container>
        </>
  
      )
    }
  }
  
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  export default connect(mapStateToProps,{logout})(NavbarCustom);






















