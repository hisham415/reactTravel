import React from "react";

const Footer = ()=>{

    return(
        <div>
            <section className="footer">
      <div className="d-flex justify-content-around footer-border-bottom">
        <div className="">
          <div className="d-flex flex-column justify-content-around">
            <div className="footer-margin-bottom">
              <img src="./assets/logox.png" alt="" />
            </div>
            <div className="footer-margin-bottom">
              <div style={{fontSize: '16px', color: "#757095"}}>
                Travel helps companies manage payments easily.
              </div>
            </div>
            <div className="footer-margin-bottom">
              <img src="./assets/Group 169.png" style={{width: "30%"}} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            style={{
                fontSize: "21px",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center"
              }}
          >
            Company
          </div>
          <div className="footer-margin-bottom">About us</div>
          <div className="footer-margin-bottom">Careers</div>
          <div className="footer-margin-bottom">Blog</div>
          <div className="footer-margin-bottom">Pricing</div>
        </div>
        <div className="">
          <div
            style={{
                fontSize: "21px",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center"
              }}
          >
            Destination
          </div>
          <div className="footer-margin-bottom">Maldives</div>
          <div className="footer-margin-bottom">Los Angelas</div>
          <div className="footer-margin-bottom">Las Vegas</div>
          <div className="footer-margin-bottom">Torronto</div>
        </div>
        <div className="">
          <div
            style={{
                fontSize: "21px",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center"
              }}
          >
            Join Our Newsletter
          </div>
          <div>
            <div className="input-group">
              <input
                type="email"
                className="form-control rounded"
                placeholder="Your email adress"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                className="btn btn-primary"
                style={{
                    border: "none"
                  }}              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <h6 className="text-center">Copyright @ Xpro 2022. All Rights Reserved.</h6>
    </div>
        </div>
    )

}
export default Footer;