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
            <div className="HeadAndInput">

                {/* student page heading */}
                <h1 className="student_page_heading">Student Information</h1>
                            
                {/* input field */}
                <div class="input-group">
                    <p></p>
                </div>

                
            </div>
            <div className="StudentPageTable">
                {/* student details table */}
                <StudentPageTable />
            </div>
            {/* Back to top button */}
            <BackToTopButton />

        </div>
    );
}