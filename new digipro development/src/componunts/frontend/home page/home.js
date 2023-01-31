import React from "react";

//importing header function
import Header from "../header/header";

//importing footer function
import Footer from "../footer/footer"

//importing choose_role page
import Choose_role from "../choose role/choose role";

//importing BrowserRouter component
import { Routes, Route } from 'react-router-dom';

//importing student_page
import Student_page from "../student page/student page"

//Home function
function Home() {
    return (
        <div className="index" >

            {/* displaying header in home page */}
            <Header />

            {/* body tag to show choose ro */}
            <body>

                {/* displaying choose_role page in home page */}
                <Choose_role />

            </body>

            {/* displaying footer in home page */}
            <Footer />
        </div>
    );
}
export default Home;

function routeChange() {
    return (
      <div>
        <Routes>
          <Route path='/student page' element={<Student_page />} />
        </Routes>
      </div>
    );
}
