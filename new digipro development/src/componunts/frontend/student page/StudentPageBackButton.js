import React from "react";

//importing StudentPageBackButton.css file into this page
import './StudentPageBackButton.css'

//importing useNavigate package to route home page to login page
import { useNavigate } from "react-router-dom";

//BackButton function
export default function StudentPageBackButton() {
    let navigate = useNavigate();
    const routeChange = () =>{

        // while match this url Home page will display
        let path =`/`;
        navigate(path);
    }

    return (
        <div className="StudentPageBackButton">

            {/* BackButton for return to Home page */}
            <button id="StudentPageBackButton" onClick={routeChange}>Back <i class="bi bi-arrow-left-circle-fill"></i>
            </button>
        </div>
    );
}