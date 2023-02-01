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
                <h1 className="StudentPageHeading">Student Information</h1>
                            
                {/* input field */}
                <form className="InputField">
                    <div className="SearchBoxAndButton">
                        <input type="search" id="SearchBox" name="q" placeholder="Search..."/>
                        <button type="submit" id="SearchButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                    
                </form>
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