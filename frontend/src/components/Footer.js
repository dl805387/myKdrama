import React from "react";
import '../styles/Footer.css'

function Footer() {

 
    return (
        <div className="footer">
            <p className="footerText">Created by Danny Lin</p>
            <p className="footerText">K-drama data from The Movie Database API</p>
            <p className="footerText"><a href="https://github.com/dl805387/myKdrama">Github</a></p>
        </div>
    );
}

export default Footer;