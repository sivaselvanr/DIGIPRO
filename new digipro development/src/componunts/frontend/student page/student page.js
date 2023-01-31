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
            <Header />
            <h1 className="student_page_head">Student Information</h1>
            

        </div>
    );
}