import React from "react";

//importing student_page.css file
import './student page.css';

//importing StudentPageTable to view student data in table form
import StudentPageTable from "./StudentPageTable";

//importing BackToTopButton to scroll to top of the page
import BackToTopButton from "../scroll/BackToTopButton";

//student_page function
export default function Student_page() {
    return (
        <div className="student_page">
            
            {/* student page heading */}
            <h1 className="student_page_heading">Student Information</h1>

            {/* Back to top button */}
            <BackToTopButton />
                        
            {/* input field */}
            <form>

                {/* search input field and search button to search student details*/}
                <div className="search_field">
                    <p className="search_box">
                        <input type="search" className="search_textbox_in_student_page" name="search_textbox_in_student_page" id="search_textbox_in_student_page" placeholder="Search..."></input>
                        <button type="submit" className="fa fa-search search_button_in_student_page" aria-hidden="true"></button>
                    </p>
                </div>
            </form>

            {/* student data t */}

        </div>
    );
}