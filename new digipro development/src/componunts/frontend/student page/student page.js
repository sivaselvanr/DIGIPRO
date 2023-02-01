import React from "react";

//importing student_page.css file
import './student page.css';

//importing StudentDetailsTable to view student data in table form
import StudentDetailsTable from "./StudentDetailsTable";

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
                    <input type="search" id="SearchBox" class="SearchBox" />
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="StudentDetailsTable">
                {/* student details table */}
                <StudentDetailsTable />

                {/* BackToTopButton */}
                <BackToTopButton />
            </div>
        </div>
    );
}