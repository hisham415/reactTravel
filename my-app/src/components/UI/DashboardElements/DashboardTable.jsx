import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
import DashboardTrow from "./DashboardTrow";
import { databaseContext } from "../../../App";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Modals from "./Modals";

const DashboardTable = (props) => {
  // console.log(props);
  const navigation = useNavigate();
  const dismiss = useRef();
  const [data, setData] = useState({});
  // const [endsIn, setEndsIn] = useState("");
  // const [peopleGoing, setPeopleGoing] = useState("");
  // const [cityName, setCityName] = useState("");
  // const [location, setlocation] = useState("");
  // const [packageSale, setPackageSale] = useState("");
  // const [packagePrice, setPackagePrice] = useState("");

  console.log(data);
  const handleDataReceived = (data) => {
    setData(data);
    console.log(data.id);
    // console.log(props.data[data-1])
  };
  function updateElementData(e) {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

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

  const deletData = (event) => {
    event.preventDefault();
    const docRef = dataReference();
    deleteDoc(docRef).then(() => {
      navigation(0);
    });
  };

  const sendDataToApi = async (event) => {
    event.preventDefault();
    const docRef = dataReference();
    updateDoc(docRef, data)
      .then((docRef) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
        navigation(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Package Name</th>
            <th>city image</th>
            <th>flag image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((x, i) => (
            <DashboardTrow
              data={x}
              key={i}
              onDataReceived={handleDataReceived}
            ></DashboardTrow>
          ))}
        </tbody>

        {/* <!-- Edit Modal HTML --> */}
      </table>
      {data ? (
        <Modals
          onImageChosen={onImageChosen}
          sendDataToApi={sendDataToApi}
          deletData={deletData}
          updateElementData={updateElementData}
          dismiss={dismiss}
          data={data}
        ></Modals>
      ) : null}
    </>
  );
};

export default DashboardTable;
