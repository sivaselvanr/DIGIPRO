import React from "react";

//importing choose_role page
import Choose_role from "./componunts/frontend/choose role/choose role";

//imp

//Home function
export default function Home() {
    return (
        <div className="index" >

            {/* body tag to show choose role page */}
            <body>

                {/* displaying choose_role page in home page */}
                <Choose_role />

            </body>
        </div>
    );
}