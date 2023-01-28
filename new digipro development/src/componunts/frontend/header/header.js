import React from "react";

//importing SREC logo and SNR logo from logo folder 
import logosrec from "../assets/logo/logo_srec.png"
import logosnr from "../assets/logo/logo_snr.jpg"

//importing header.css file
import './header.css'

//header function
export default function Header() {
    return (
        <div className="header">

            {/* displaying image in home page */}
            <img src={logosrec} className='logosrec'/>
            <img src={logosnr} className='logosnr'/>

            {/* title name */}
            <div className="title_card">
                    <h2 className="srec_name">SRI RAMAKRISHNA ENGINEERING COLLEGE</h2>
                    <h1 className="digipro_name"><b>DIGI-PRO</b></h1>
                    <h4 className="welcome_name">WELCOMES YOU</h4>
            </div>
        </div>
    );
}