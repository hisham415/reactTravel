import React from "react";

const DashboardTrow = (props) => {
  const sendDataToParent = () => {
    console.log(props.data);
    props.onDataReceived(props.data);
  };

  return (
    <tr>
      <td>
        
      </td>
      <td>{props.data.cityName}</td>
      <td><img src={props.data.imageCity} style={{width: '80px' , height: '100px'}} alt="" /></td>
      <td><img src={props.data.imageFlag} style={{width: '80px' , height: '100px'}} alt="" /></td>
      <td>{props.data.packageSale}</td>
      <td>
        <a
          href="#editCardModal"
          className="edit"
          data-toggle="modal"
          onClick={sendDataToParent}
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a
          href="#deleteCardModal"
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
