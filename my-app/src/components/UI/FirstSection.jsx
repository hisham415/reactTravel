import React from "react";
import Navbar from "../FirstSectionElements/Navbar";
import Welcome from "../FirstSectionElements/Welcome";
const FirstSection = ()=>{


    return(
        <div className="first-section">
            <Navbar/>
            <Welcome/>
        </div>
    )
}

export default FirstSection;