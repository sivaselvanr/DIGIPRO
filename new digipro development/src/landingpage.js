import React from "react";

//importing header
import Header from './componunts/frontend/header/header';

//importing footer
import Footer from './componunts/frontend/footer/footer';

//importing choose_role page to select role STUDENT or TUTOR
import Choose_role from "./componunts/frontend/choose role/choose role";

//Home function
export default function Home() {
    return (
        <div className="index" >

        {/* displaying header in landingpage */}
        <Header />

            {/* body tag to show choose role page */}
            <body>

                {/* displaying choose_role page in home page */}
                <Choose_role />

            </body>
            
        {/* displaying footer in landingpage */}
        <Footer />
        </div>
    );
}