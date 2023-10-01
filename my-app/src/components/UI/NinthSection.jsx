import React from "react";

const NinthSection = ()=>{

    return(
        <section className="container-fluid colouring">
      <div className="category text-center">PROMOTION</div>
      <div className="best-services-text">See What Our Clients Say About Us</div>
      <section className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center py-5">
                <div className="d-flex flex-column align-items-center position-relative">
                  <img src="./assets/Ellipse 624.png" className="position-absolute review-icon" alt=""/>
                  <div className="review-text">
                    Vel officiis dolor ea illo aut eligendi ullam non laudantium
                    magnam et recusandae molestiae sit iure unde aut voluptate
                    quaerat. Id sunt provident quo possimus impedit vel
                    doloremque obcaecati qui ullam consectetur et ipsum omnis.
                    <div className="reviewer">
                      <h5>Christine Beckam - Designer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center py-5">
                <div className="d-flex flex-column align-items-center position-relative">
                  <img src="./assets/Ellipse 624.png" className="position-absolute review-icon" alt=""/>
                  <div className="review-text">
                    Vel officiis dolor ea illo aut eligendi ullam non laudantium
                    magnam et recusandae molestiae sit iure unde aut voluptate
                    quaerat. Id sunt provident quo possimus impedit vel
                    doloremque obcaecati qui ullam consectetur et ipsum omnis.
                    <div className="reviewer">
                      <h5>Christine Beckam - Designer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center py-5">
                <div className="d-flex flex-column align-items-center position-relative">
                  <img src="./assets/Ellipse 624.png" className="position-absolute review-icon" alt=""/>
                  <div className="review-text">
                    Vel officiis dolor ea illo aut eligendi ullam non laudantium
                    magnam et recusandae molestiae sit iure unde aut voluptate
                    quaerat. Id sunt provident quo possimus impedit vel
                    doloremque obcaecati qui ullam consectetur et ipsum omnis.
                    <div className="reviewer">
                      <h5>Christine Beckam - Designer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </section>
    )
}
export default NinthSection;