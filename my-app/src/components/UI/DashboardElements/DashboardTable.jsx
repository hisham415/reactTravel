import React, {useEffect} from "react";
import DashboardTrow from "./DashboardTrow";

const DashboardTable = (props) => {
    const isOpen = props.isOpen;
    const setIsOpen = props.setIsOpen;
    
    const fetchData = async ()=>{
      try{
        const response = await fetch(
          "https://6518be3d818c4e98ac5fea3e.mockapi.io/cards"
        );
        const jsonData = await response.json();
        console.log('ggggg',jsonData);
      }catch(error){
        console.error("Error fetching data", error);
      }
    }
    useEffect(()=>{
      fetchData();
        console.log('ff20')
      }, [])
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
          <DashboardTrow data={x} isOpen={isOpen} setIsOpen={setIsOpen}></DashboardTrow>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;
