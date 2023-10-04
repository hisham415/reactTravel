import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
import axios from "axios";

const DashboardLayout = (props) => {
  const [formData, setFormData] = useState({
    endsIn: '',
    peopleGoing: '',
    cityName: '',
    location: '',
    packageSale: '',
    packagePrice: '',
    imageCity: '',
    imageFlag: '',
  });
  const [endsIn, setEndsIn] = useState("");
  const [peopleGoing, setPeopleGoing] = useState("");
  const [cityName, setCityName] = useState("");
  const [location, setlocation] = useState("");
  const [packageSale, setPackageSale] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  console.log(formData);

  const endsInHandler = (event) => {
    setFormData({
      ...formData,
      endsIn: event.target.value,
    })
    setEndsIn(event.target.value);
    console.log(formData);
  };
  const peopleGoingHandler = (event) => {
    setFormData({
      ...formData,
      peopleGoing: event.target.value,
    })
    setPeopleGoing(event.target.value);
  };
  const cityNameHandler = (event) => {
    setFormData({
      ...formData,
      cityName: event.target.value,
    })
    setCityName(event.target.value);
  };
  const setLocationHandler = (event) => {
    setFormData({
      ...formData,
      location: event.target.value,
    })
    setlocation(event.target.value);
  };
  const packageSaleHandler = (event) => {
    setFormData({
      ...formData,
      packageSale: event.target.value,
    })
    setPackageSale(event.target.value);
  };
  const packagePriceHandler = (event) => {
    setFormData({
      ...formData,
      packagePrice: event.target.value,
    })
    setPackagePrice(event.target.value);
  };
  // const cardData = {
  //   endsIn: endsIn,
  //   peopleGoing: peopleGoing,
  //   cityName: cityName,
  //   location: location,
  //   packageSale: packageSale,
  //   packagePrice: packagePrice,
  //   imageCity: "",
  //   imageFlag: "",
  // };

  function onImageChosen(e) {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    console.log(reader);
    reader.onload = (arg) => {
      if (e.target.id === "imageInput"){ 
        setFormData({
          ...formData,
          imageCity: arg.target.result,
        })
      }
      if (e.target.id === "flagInput") {
        setFormData({
          ...formData,
          imageFlag: arg.target.result,
        })
      }
    };
    reader.readAsDataURL(file);
    // console.log(cardData);
  }

  const sendDataToApi = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://6518be3d818c4e98ac5fea3e.mockapi.io/cards",
        formData
      );
      console.log("Response from API:", response.data);
      document
        .getElementById("myDismissButton")
        .setAttribute("data-dismiss", "modal");
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };
  
  return (
    <div className="main-content position-relative">
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
            <DashboardTable data={props.data}></DashboardTable>

            {/* EDIT CARDS */}
            <div
              id="addEmployeeModal"
              className="modal fade"
              style={{ zIndex: "9999" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={sendDataToApi} id="myAddForm">
                    <div className="modal-header">
                      <h4 className="modal-title">Add Card</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>

                    <div className="modal-body">
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="file"
                          id="imageInput"
                          className="form-control"
                          required
                          onChange={onImageChosen}
                        />
                      </div>
                      <div className="form-group">
                        <label>Flag</label>
                        <input
                          type="file"
                          id="flagInput"
                          className="form-control"
                          required
                          onChange={onImageChosen}
                        />
                      </div>
                      <div className="form-group">
                        <label>Ends in? </label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          value={endsIn}
                          onChange={endsInHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label>How many people going so far? </label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          value={peopleGoing}
                          onChange={peopleGoingHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label>City Name</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={cityName}
                          onChange={cityNameHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label>Location</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={location}
                          onChange={setLocationHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label>Package Sale</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          value={packageSale}
                          onChange={packageSaleHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label>Package Price</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          value={packagePrice}
                          onChange={packagePriceHandler}
                        />
                      </div>
                    </div>

                    <div className="modal-footer">
                      <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      <button
                        className="btn btn-sucess"
                        id="myDismissButton"
                        type="submit"
                        
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            {
              <div
                id="editEmployeeModal"
                className="modal fade"
                style={{ zIndex: "9999" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Employee</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea
                            className="form-control"
                            required
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <input
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          className="btn btn-info"
                          value="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            }

            {/* <!-- Delete Modal HTML --> */}
            <div
              id="deleteEmployeeModal"
              className="modal fade"
              style={{ zIndex: "9999" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Delete Employee</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Are you sure you want to delete these Records?</p>
                      <p className="text-warning">
                        <small>This action cannot be undone.</small>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      <input
                        type="submit"
                        className="btn btn-danger"
                        value="Delete"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
