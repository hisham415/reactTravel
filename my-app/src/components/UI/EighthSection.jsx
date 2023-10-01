import React from "react";

const EighthSection = ()=>{
    

    return(
        <section className="explore d-flex">
      <div className="width-adjusting position-relative">
        <img src="./assets/Explore-Nature(1).png" alt="" className="adjust" />
        <button className="btn btn-adjust-1 position-absolute">
          View Packages
        </button>
      </div>
      <div className="width-adjusting position-relative">
        <img src="./assets/Explore-Cities(1).png" alt="" className="adjust" />
        <button className="btn btn-adjust-2 position-absolute">
          View Packages
        </button>
      </div>
    </section>
    )
};
export default EighthSection;