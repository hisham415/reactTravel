import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardElements/DashboardLayout";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const fetchData = async ()=>{
    try{
      const response = await fetch(
        "https://6518be3d818c4e98ac5fea3e.mockapi.io/cards"
      );
      const jsonData = await response.json();
        console.log('ggggg',jsonData);
        setData(jsonData);
    }catch(error){
      console.error("Error fetching data", error);
    }
  }
  useEffect(()=>{
    fetchData();
      console.log('ff')
    }, [])

  return (
    <DashboardLayout data={data}>
    </DashboardLayout>
  );
};

export default Dashboard;
