import React, { useState, useEffect, useMemo, useContext } from "react";
import DashboardLayout from "./DashboardElements/DashboardLayout";
import Navbar from "../FirstSectionElements/Navbar";
import { databaseContext } from "../../App";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  // const fetchData = async ()=>{
  //   try{
  //     const response = await fetch(
  //       "https://6518be3d818c4e98ac5fea3e.mockapi.io/cards"
  //     );
  //     const jsonData = await response.json();
  //     // jsonData.map(x=>{

  //     //   addDoc(collection(db,'travel'), x);
  //     // })
  //       console.log('ggggg',jsonData);
  //       setData(jsonData);
  //   }catch(error){
  //     console.error("Error fetching data", error);
  //   }
  // }
  // useEffect(()=>{
  //   fetchData();
  //     console.log('ff')
  //   }, [])
  const daata = useContext(databaseContext);
  const db = useMemo(() => {
    return getFirestore(daata);
  }, [daata]);
  console.log(daata);
  // useEffect(()=>{

  // }, [data])
  useEffect(() => {
    // const db = getFirestore(daata);
    //  addDoc(collection(db, "cities"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // }).then((e)=>{
    //   console.log(e);
    // }).catch(e=>{
    //   console.log(e)
    // });
    (async () => {
      const data = await getDocs(collection(db, "travelPackages"));
      console.log(data.docs);
      const jsonData = data.docs.map((x) => {
        let k = x.data()
        k.id = x.id
        //console.log(x.data());
        return k;
      });
      setData(jsonData);
      console.log(jsonData);
    })();
  }, []);

  return (
    <div style={{ backgroundColor: "grey" }}>
      <Navbar></Navbar>
      <DashboardLayout data={data}></DashboardLayout>
    </div>
  );
};

export default Dashboard;
