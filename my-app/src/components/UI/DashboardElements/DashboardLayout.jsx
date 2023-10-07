import React, { useState, useContext, useMemo, useRef } from "react";
import DashboardTable from "./DashboardTable";
import axios from "axios";
import { databaseContext } from "../../../App";
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const DashboardLayout = (props) => {
  const navigation = useNavigate();
  const dismiss = useRef();
  const [formData, setFormData] = useState({
    endsIn: "",
    peopleGoing: "",
    cityName: "",
    location: "",
    packageSale: "",
    packagePrice: "",
    imageCity: "",
    imageFlag: "",
  });
  const [endsIn, setEndsIn] = useState("");
  const [peopleGoing, setPeopleGoing] = useState("");
  const [cityName, setCityName] = useState("");
  const [location, setlocation] = useState("");
  const [packageSale, setPackageSale] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  // console.log(formData);

  const endsInHandler = (event) => {
    setFormData({
      ...formData,
      endsIn: event.target.value,
    });
    setEndsIn(event.target.value);
  };
  const peopleGoingHandler = (event) => {
    setFormData({
      ...formData,
      peopleGoing: event.target.value,
    });
    setPeopleGoing(event.target.value);
  };
  const cityNameHandler = (event) => {
    setFormData({
      ...formData,
      cityName: event.target.value,
    });
    setCityName(event.target.value);
  };
  const setLocationHandler = (event) => {
    setFormData({
      ...formData,
      location: event.target.value,
    });
    setlocation(event.target.value);
  };
  const packageSaleHandler = (event) => {
    setFormData({
      ...formData,
      packageSale: event.target.value,
    });
    setPackageSale(event.target.value);
  };
  const packagePriceHandler = (event) => {
    setFormData({
      ...formData,
      packagePrice: event.target.value,
    });
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
    // console.log(file)
    if (!file) {
      return;
    }
    const imageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(imageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get the upload progress.
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);

        // Update the UI to show the upload progress.
      },
      (error) => {
        // Handle the error.
        console.log(error);
      },
      async (g) => {
        // Get the download URL of the uploaded image.
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        if (e.target.id === "imageInput") {
          setFormData({
            ...formData,
            imageCity: downloadURL,
          });
        }
        if (e.target.id === "flagInput") {
          setFormData({
            ...formData,
            imageFlag: downloadURL,
          });
        }
        // Store the download URL of the image in Firestore along with your other data.
      }
    );
  }

  

  const daata = useContext(databaseContext);
  const db = useMemo(() => {
    return getFirestore(daata);
  }, [daata]);
  const storage = useMemo(() => {
    return getStorage(daata);
  }, [daata]);
  // const  = firebase.storage();
  const sendDataToApi = async (event) => {
    event.preventDefault();
    addDoc(collection(db, "travelPackages"), formData).then(() => {
      dismiss.current.click();
      // location.reload();
      navigation(0);
    });
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
                        ref={dismiss}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
