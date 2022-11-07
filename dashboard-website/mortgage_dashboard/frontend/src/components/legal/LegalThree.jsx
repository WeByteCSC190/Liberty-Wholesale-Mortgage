import React, { Component } from "react";
import WhiteLogo from "../images/logo.jpg"; 

export default class LegalThree extends Component {
    render() {
    return(
        <body class="legal-body">
        <section class="legal-section">
          <div class="legal-container">
            <div class="legal-intro">
            <img
                    src={WhiteLogo} //MLO Support Logo
                    width="200"
                    height="100"
                    className="company-logo"
                    alt="Logo"
                 />
            <h1 className="legal-title">MLO SUPPORT LEGAL TOPIC THREE</h1>
                 <p>
                   Last Updated: 
                 </p>
             </div>
        </div>
        </section>
    
        <section class="legal-section">
          <div class="legal-container">
            <div class="legal-content">
              <h3>Heading 1</h3>
              <p>
                Content of Heading 1
              </p>
          </div>
        </div>
        </section>
    
        <section class="legal-section">
          <div class="legal-container">
            <div class="legal-content">
              <h3>Heading 2</h3>
                <p>
                Content of heading 2
                </p>
          </div>
        </div>
        </section>
    
    
        <section class="legal-section">
          <div class="legal-container">
            <div class="legal-ending">
              <h3></h3>
              <p>
              
              </p>
          </div>
        </div>
        </section>
      </body>
    )  
 }
}