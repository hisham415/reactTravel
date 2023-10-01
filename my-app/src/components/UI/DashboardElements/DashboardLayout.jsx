import React from "react";
import DashboardTable from "./DashboardTable";

const DashboardLayout = (props) => {
  console.log(props.data);
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-12">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
                  <h2 className="ml-lg-2">Manage Cards</h2>
                </div>
                <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Add New Package</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <DashboardTable data ={props.data}></DashboardTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
