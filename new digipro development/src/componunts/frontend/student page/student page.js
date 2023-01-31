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
            <h1 className="student_page_heading">Student Information</h1>
            
            {/* input field */}
            <div className="input_fields">
                <form>

                    {/* search input field and search button to search student details*/}
                    <div className="search_field">
                        <p className="search_box">
                            <input type="search" className="search_textbox_in_student_page" name="search_textbox_in_student_page" id="search_textbox_in_student_page" placeholder="Search..."></input>
                            <button type="submit"><i className="fa fa-search search_button_in_student_page" aria-hidden="false"></i></button>
                        </p>
                    </div>
                </form>
            </div>
            </body>
            <Footer />
        </div>
    );
}