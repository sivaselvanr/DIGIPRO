import React from "react";

//importing student_page.css file
import './StudentPage.css';

//importing StudentDetailsTable to view student data in table form
import StudentDetailsTable from "./StudentDetailsTable";

// importing BackButton for return to Home page
import StudentPageBackButton from "./StudentPageBackButton";

//importing BackToTopButton to scroll to top of the page
import BackToTopButton from "../scroll/BackToTopButton";

//importing ScrollToTop while landing
import ScrollToTop from "../scroll/ScrollToTop";

//student_page function
export default function StudentPage() {
    return (

        // StudentPage start
        <div className="student_page">

            {/* BackButton for return to Home */}
            <StudentPageBackButton />

            {/* HeadandInput class contains Student page heading and Search Box and Search Button */}
            <div className="HeadAndInput">

                {/* student page heading */}
                <h1 className="StudentPageHeading">Student Information</h1>
                                     
                {/* search box and search button */}
                <center>
                    <form>
                        <div class="input-group">

                            {/* text box  */}
                            <input id="SearchBox" type="search" name="q" class="form-control" placeholder="Search..."/>

                            {/* search button */}
                            <div class="input-group-append">
                                <button id="SearchButton" class="btn btn-secondary">

                                    {/* search button icon */}
                                <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </center>
            </div>
            {/* HeadAndInput end */}
            
            {/* displaying StudentDetailsTable in student page */}
            <div className="StudentDetailsTable">

                {/* student details table */}
                <StudentDetailsTable />

                {/* BackToTopButton */}
                <BackToTopButton />

                {/* ScrollToTop whi le landing */}
                <ScrollToTop />
            </div>
        </div>
        // StudentPage End

    );
}