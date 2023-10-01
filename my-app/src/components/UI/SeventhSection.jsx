import React from "react";

const SeventhSection = () => {
  return (
    <section className="container position-relative">
      <div className="d-flex flex-column adjusting-illustration">
        <div className="d-flex justify-content-center flex-center col-5">
          <div className="promotion-width col">
            <div className="category">PROMOTION</div>
            <div className="best-services-text text-centering">
              We Provide You Best Europe Sightseeing Tours
            </div>
            <p>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
            <button type="button" className="btn btn-danger">
              View Packages
            </button>
          </div>
        </div>
        <div className="">
          <div className="d-flex coloumn">
            <img
              src="/assets/Destination1.png"
              className="positioning locations"
              alt=""
            />
            <img
              src="/assets/Destination2.png"
              className="positioning locations"
              alt=""
            />
            <img
              src="/assets/Destination3.png"
              className="positioning locations"
              alt=""
            />
            <img
              src="/assets/Destination4.png"
              className="positioning locations"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="illustration-2 position-absolute end-0 bottom-0"
        style={{zIndex: -1}}
      >
        <img src="./assets/Illustration (2).png" id="xx" alt="" />
      </div>
    </section>
  );
};
export default SeventhSection;