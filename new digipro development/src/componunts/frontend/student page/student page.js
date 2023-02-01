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
                <form>

                    {/* search input field and search button to search student details*/}
                    <div className="search_field">
                        <p className="search_box">
                        <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
                        </p>
                    </div>
                </form>
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