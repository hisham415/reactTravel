import React from "react";

const DashboardTrow = (props) => {
  const sendDataToParent = () => {
    console.log(props.data);
    props.onDataReceived(props.data);
  };

  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{props.data.cityName}</td>
      <td>{props.data.description}</td>
      <td>{props.data.packageSale}</td>
      <td>
        <a
          href="#editEmployeeModal"
          className="edit"
          data-toggle="modal"
          onClick={sendDataToParent}
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a
          href="#deleteEmployeeModal"
          className="delete"
          data-toggle="modal"
          onClick={sendDataToParent}
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </tr>
  );
};

export default DashboardTrow;
