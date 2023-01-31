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
                            <button type="submit" className="fa fa-search search_button_in_student_page" aria-hidden="true"></button>
                        </p>
                        
                    </div>
                </form>
            </div>
            <p>
                            1l;kjhgf1;alkdsss
                            sssssssssssssss
                            sssssssssssssssss
                            
                            sssssssssssssss
                            
                            
                            
                            sssssssssssssss
                            


                            
                            sssssssssssssssssssssssssssssssss
                            sssssssssssssssssssssssssssssssssssssssssss
                            ssssss
                            
                            


                            ssssssssssssssssssssssssssssssssssssssss
                            ssssssssssssssss




                            sssssssssssssssssssssssss
                            ssssssssssssssss

                            sssssssssssssssssssssssss
                            sssssssssssssssssssssssssssssss
                            ssssss
                            sssssssssssssss
                            sssssssssssss
                            sssssssssssssss

                            ssssssssss
                            sssssssssssssssssssss
                            ss
                            
                            ssssssssssssssssss
                            
                            ssssss
                            ssssss
                            sssss

                            sssss


                            sssssssssssssssss
                            sssssssssssssssssssss
                            sssssssssssssssssssss
                            sssssssssssssssssssssss
                            ssssssssssssssssssssssss







                            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </p>
            </body>
            <Footer />
        </div>
    );
}