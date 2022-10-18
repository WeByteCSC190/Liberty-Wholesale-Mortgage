import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';


export default function Footer() {
    return (
    <>
    <Container className="Footer-Body" fluid>
    <Col>
        <ul className="Footer-Links">
           <li><a href="/terms" 
                  target="_blank" 
                  rel="noopener noreferrer">Terms of Use
                </a>
            </li>
           <li><a href="/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer">Privacy Policy
                </a>
           </li>
           <li><a>Legal Link 1</a></li>
           <li><a>Legal Link 2</a></li>
        </ul>
    </Col>
    <Col className="Footer-Company">
        <p>Powered By Liberty Wholesale Mortgage</p>
    </Col>
    </Container>
    </>
    )
}







