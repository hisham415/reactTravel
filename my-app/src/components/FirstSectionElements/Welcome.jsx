import React from "react";

const Welcome = () => {
  return (
    <section className="container welcome">
      <span id="vector-1">
        <img src="./assets/Vector 1.png" alt="vector" />
      </span>
      <p className="welcome-text">
        No matter where you're going to, we'll take you there
      </p>
      <section className="tool-bar d-flex">
        <ul className="nav nav-tabs row" id="tools-section">
          <li className="nav-item col-3">
            <span className="nav-link where-to">
              
              <input
                type="text"
                style={{width: '100%'}}
                placeholder="Where to?"
              />
            </span>
          </li>
          <li className="nav-item col-3">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                type="button"
                id="g"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Travel Type
              </a>
              <ul className="dropdown-menu" aria-labelledby="g">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown col-3">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                type="button"
                id="g"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Duration
              </a>
              <ul className="dropdown-menu" aria-labelledby="g">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item col-3 d-flex justify-content-center">
            <a className="nav-link" id="submit-btn" href="#">
              <button type="button" className="btn btn-success px-5">
                Submit
              </button>
            </a>
          </li>
        </ul>
      </section>
      <div className="row">
        <img
          src="./assets/Frame 117 (2).png"
          id="profile-pic"
          className="col-6"
          alt=""
        />
        <div className="col-6" id="profile-text">
          2,500 people booked Tommorowland Event in last 24 hours
        </div>
      </div>
    </section>
  );
};
export default Welcome;
