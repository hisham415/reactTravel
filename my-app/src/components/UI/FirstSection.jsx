import React from "react";
import Navbar from "../FirstSectionElements/Navbar";
import Welcome from "../FirstSectionElements/Welcome";
import Navbarv2 from "../FirstSectionElements/Navbarv2";
const FirstSection = ()=>{


    return(
        <div className="first-section">
            <Navbar/>
            {/* <Navbarv2/> */}
            <Welcome/>
        </div>
    )
}

export default FirstSection;