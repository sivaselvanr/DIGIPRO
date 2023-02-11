// This page is footer page is for StudentPage
import React from "react";

//importing DIGIPRO Team Logo
import StudentPageFooterlogodigiproit from "../assets/logo/logo_digiproIT.svg"

//importing footer.css file
import './StudentPageFooter.css'

//footer function
export default function StudentPageFooter() {
    return (
        <div className="StudetPageFooter">
            
            {/* displaying Digiproit logo */}
            <img src={StudentPageFooterlogodigiproit} id="StudentPageFooterlogodigiproit" />
        </div>
    );
}