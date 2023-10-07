import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
import DashboardTrow from "./DashboardTrow";
import { databaseContext } from "../../../App";
import { getFirestore } from "firebase/firestore";
import { doc,updateDoc, deleteDoc} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const DashboardTable = (props) => {
  // console.log(props);
  const navigation = useNavigate();
  const dismiss = useRef();
  const [data, setData] = useState("");
  const [endsIn, setEndsIn] = useState("");
  const [peopleGoing, setPeopleGoing] = useState("");
  const [cityName, setCityName] = useState("");
  const [location, setlocation] = useState("");
  const [packageSale, setPackageSale] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  // useEffect(()=>{

  const handleDataReceived = (data) => {
    setData(data);
    console.log(data.id);
    // console.log(props.data[data-1])
  };

  const endsInHandler = (event) => {
    setData({
      ...data,
      endsIn: event.target.value,
    });
    setEndsIn(event.target.value);
    console.log(data);
  };
  const peopleGoingHandler = (event) => {
    setData({
      ...data,
      peopleGoing: event.target.value,
    });
    setPeopleGoing(event.target.value);
  };
  const cityNameHandler = (event) => {
    setData({
      ...data,
      cityName: event.target.value,
    });
    setCityName(event.target.value);
  };
  const setLocationHandler = (event) => {
    setData({
      ...data,
      location: event.target.value,
    });
    setlocation(event.target.value);
  };
  const packageSaleHandler = (event) => {
    setData({
      ...data,
      packageSale: event.target.value,
    });
    setPackageSale(event.target.value);
  };
  const packagePriceHandler = (event) => {
    setData({
      ...data,
      packagePrice: event.target.value,
    });
    setPackagePrice(event.target.value);
  };
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
          setData({
            ...data,
            imageCity: downloadURL,
          });
        }
        if (e.target.id === "flagInput") {
          setData({
            ...data,
            imageFlag: downloadURL,
          });
        }
      }
    );
  }
  function dataReference() {
    if (data) {
      const dataID = data.id;
      console.log(dataID);

      const db = getFirestore();
      const docRef = doc(db, "travelPackages", dataID);
      return docRef;
    }
  }
  const daata = useContext(databaseContext);
  // const docRef = doc(db, 'travelPackages', data.id);
  const storage = useMemo(() => {
    return getStorage(daata);
  }, [daata]);
  // console.log(doc(collection(db, "travelPackages"), data.id));

  const deletData = (event)=>{
    event.preventDefault();
    const docRef = dataReference();
    deleteDoc(docRef);
  }

  const sendDataToApi = async (event) => {
    event.preventDefault();
    const docRef = dataReference();
    updateDoc(docRef, data)
      .then((docRef) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Package Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((x) => (
          <DashboardTrow
            data={x}
            onDataReceived={handleDataReceived}
          ></DashboardTrow>
        ))}
      </tbody>

      {/* <!-- Edit Modal HTML --> */}
      <div
        id="editEmployeeModal"
        className="modal fade"
        style={{ zIndex: "9999" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={sendDataToApi} id="myAddForm">
              <div className="modal-header">
                <h4 className="modal-title">Edit Card</h4>
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
                    value={data.endsIn}
                    onChange={endsInHandler}
                  />
                </div>
                <div className="form-group">
                  <label>How many people going so far? </label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    value={data.peopleGoing}
                    onChange={peopleGoingHandler}
                  />
                </div>
                <div className="form-group">
                  <label>City Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={data.cityName}
                    onChange={cityNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={data.location}
                    onChange={setLocationHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Package Sale</label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    value={data.packageSale}
                    onChange={packageSaleHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Package Price</label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    value={data.packagePrice}
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
                  onClick={deletData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </table>
  );
};

export default DashboardTable;
