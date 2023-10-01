import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        type="button"
        id="g"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Services
      </a>
      <ul className="dropdown-menu" aria-labelledby="g">
        <li>
          <a className="dropdown-item" href="#">
            {props.ServiceOne}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
          {props.ServiceTwo}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
          {props.ServiceThree}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;