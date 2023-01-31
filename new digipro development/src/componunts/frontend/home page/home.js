import React from "react";

//importing header function
import Header from "../header/header";

//importing footer function
import Footer from "../footer/footer"

//importing choose_role page
import Choose_role from "../choose role/choose role";

//Home function
function Home() {
    return (
        <div className="index" >

            {/* displaying header in home page */}
            <Header />

            {/* body */}
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
