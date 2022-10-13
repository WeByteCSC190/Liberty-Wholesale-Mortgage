import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import BlueLogo from './images/blue_logo.png';


export default function Footer() {
    return (
    <>
    <Container fluid className="Footer-Body">
     <footer className="Footer-Style">
        <Row className="Footer-Row">
            <Col className="Footer-Col">
            <img className="Footer-Logo"
                src={BlueLogo} //MLO Support Logo
                alt="MLO Support"
            />
            <p>Powered by Liberty Wholesale Mortgage</p>
            </Col>
            <Col className="Footer-Col">
                <h3>Office</h3>
                <p>Address of LWM</p>
                <p>Sacramento, California</p>
                <p className="Footer-Email">support@lwm.com</p>
                <h5>916-001-2930</h5>
            </Col>

            <Col className="Footer-Col">
                <ul>
                    <h3>Legal</h3>
                    <SwitchLink href="/terms">Terms of Use</SwitchLink>
                    <SwitchLink href="/privacy">Privacy Policy</SwitchLink>
                </ul>
            </Col>

            <Col className="Footer-Col">
                
                  <ul>
                     <h3>Social Media</h3>
                     <SwitchLink href="">Facebook</SwitchLink>
                     <SwitchLink href="">Twitter</SwitchLink>
                     <SwitchLink href="">Instagram</SwitchLink>
                   
                  </ul>
            </Col>
        
        </Row>
      </footer>
    </Container>
    </>
        
    )
}

function SwitchLink({href, children, ...props }){
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch( {path: resolvedPath.pathname, end:true} ) 

    return(
        <>
        <li className={ isActive ? "active" : ""}> 
          <Link href={href} {...props}>
              {children}
          </Link>
      </li>
        </>
    )
}







