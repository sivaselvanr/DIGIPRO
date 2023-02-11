import React from "react";

//importing StudentPageHeader in StudentPage
import StudentPageHeader from "./componunts/frontend/header/StudentPageHeader";

//importing StudentPageFooter in StudentPage
import StudentPageFooter from "./componunts/frontend/footer/StudentPageFooter";

//importing StudentPage in StudentPage
import StudentPage from "./componunts/frontend/student page/StudentPage";

export default function StudentPages() {
    return (

        <>
        {/* displaying header in StudentPages */}
        <StudentPageHeader />

        <body>
        {/* displaying StudentPage in this page */}
        <StudentPage />
        </body>

        {/* displaying footer in this page */}
        <StudentPageFooter />
        </>
    )
}