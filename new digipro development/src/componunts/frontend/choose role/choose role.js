import React from "react";

//importing useNavigate package to route home page to login page
import { useNavigate } from "react-router-dom";

//importing choose role.css file
import "./choose role.css";

//choose role function
export default function Choose_role() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path =`./student page`;
        navigate(path);
    }

    return (
        <div className="choose_role">

            {/* names for buttons */}
            <h1 className="choose_role_name">CHOOSE ROLE</h1>

            {/* button for choose role Student or tutor */}
            <div className="choose_role_buttons">

                {/* button for sutdent */}
                <button className="student_button" onClick={routeChange}>Student</button>
                
                {/* button for tutor */}
                <button className="tutor_button">Tutor</button>
            </div>
        </div>
    );
}