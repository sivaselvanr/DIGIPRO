import React from "react";

//importing choose_role page to select role STUDENT or TUTOR
import Choose_role from "./componunts/frontend/choose role/choose role";

// import StudentDetailsTable './componunts/frontend/student page/StudentDetailsTable'
import StudentDetailsTable from "./componunts/frontend/student page/StudentDetailsTable";


//Home function
export default function Home() {
    return (
        <div className="index" >

            {/* body tag to show choose role page */}
            <body>

                {/* displaying choose_role page in home page */}
                <Choose_role />
                <StudentDetailsTable />

            </body>
        </div>
    );
}