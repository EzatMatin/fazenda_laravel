import React from "react";
import LandingPage from "@/Layouts/LandingPage";
import { Link } from "@inertiajs/react";

function Go() {
    return (
        
            <Link
                    href={route("mydashboard", "teste")}
                    method="post"
                   
                >

                    myDashboard
           </Link>
     
    );
}
export default Go;
