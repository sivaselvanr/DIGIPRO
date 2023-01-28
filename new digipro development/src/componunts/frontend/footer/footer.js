import React from "react";

//importing DIGIPRO Team Logo
import logodigiproit from "../assets/logo/logo_digiproIT.svg"

//importing footer.css file
import './footer.css'

//footer function
export default function Footer() {
    return (
        <div className="footer">
            
            {/* displaying Digiproit logo */}
            <img src={logodigiproit} className="logodigiproit" />
        </div>
    );
}