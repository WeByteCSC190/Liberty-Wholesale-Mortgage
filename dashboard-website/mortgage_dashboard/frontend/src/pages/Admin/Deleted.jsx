import React from 'react';
import Navbar from "../../components/NavbarAdmin";
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer';

export default function RecentlyDeleted() {
    return(
        <>
        <div className="page-wrapper">
        <div className="Header"><Navbar /></div>
        <div className="Content">
        <Container className="page-format">
        <p className="Page-Title">Recovery Bin</p>
         </Container>
        </div>
        <div className="Footer">
           <Footer />
        </div>
        </div>
         </>
    )
}