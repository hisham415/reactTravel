import React from "react";

const ForthSection = ()=>{

    return(
        <section className="d-flex justify-content-around" id="offers">
        <div className="justify-content-center d-flex romantic">
          <img src="./assets/Illustration.png" className="" alt="" id="honeymoon" />
        </div>
        <div className="d-flex justify-content-center" id="offer-caption">
          <div className="d-flex flex-column align-items-start centering">
            <div className="category flex-center">HONEYMOON SPECIALS</div>
            <div className="best-services-text flex-center text-start">
              Our Romantic Tropical Destination
            </div>
            <div className="paragraph-width flex-center mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              amet ratione qui aspernatur doloribus, ipsam autem sint incidunt
              nulla ipsa.
            </div>
            <button type="button" className="btn btn-danger flex-center">
              View Packages
            </button>
          </div>
        </div>
      </section>
    )
}
export default ForthSection;