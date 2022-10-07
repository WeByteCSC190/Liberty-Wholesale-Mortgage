import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <nav className="Footer-Body">
        <div className="left-footer">
        <p>Based from Sacramento, California</p>
        </div>
        <div className='center-footer'>
        <Link href="/terms">Contact Us</Link>
        <Link href="/terms">Terms of Use</Link>
        <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className="right-footer">
        <p>Powered by Liberty Wholesale Mortgage</p>
        </div>
        </nav>
        </>
    )
}
 
