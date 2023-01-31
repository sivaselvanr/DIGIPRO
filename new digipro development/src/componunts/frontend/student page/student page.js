import React from "react";

//importing student_page.css file
import './student page.css';

//importing header
import Header from "../header/header";

//importing footer
import Footer from "../footer/footer";

//student_page function
export default function Student_page() {
    return (
        <div className="student_page">

            {/* displaying header in student page */}
            <Header />
            
            <body>

            {/* student page heading */}
            <h1 className="student_page_heading"><u>Student Information</u></h1>
            
      
            <div className="input_fields">
                <p>
                    <input type="search" name="search_in_student_page" id="search_in_student_page"></input>
                </p>
            </div>
            </body>
            <Footer />
        </div>
    );
}