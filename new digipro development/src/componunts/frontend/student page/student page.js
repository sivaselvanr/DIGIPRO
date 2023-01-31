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
            
            {/* input field */}
            <div className="input_field">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <form>

                    {/* search input field */}
                    <p>
                        <input type="search" name="search_in_student_page" id="search_in_student_page" placeholder="Search..."></input>
                        <button type="submit"><i className="submit_to_search" aria-hidden="true"></i></button>
                    </p>
                </form>
            </div>
            </body>
            <Footer />
        </div>
    );
}