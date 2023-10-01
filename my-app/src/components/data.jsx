import React, {useEffect} from "react";
useEffect(()=>{
  fetchData();
    console.log('ff')
  }, [])
    console.log('gg')
  const fetchData = async ()=>{
    try{
      const response = await fetch(
        "https://6518be3d818c4e98ac5fea3e.mockapi.io/cards"
      );
      const jsonData = await response.json();
      console.log('line13',jsonData);
    }catch(error){
      console.error("Error fetching data", error);
    }
  }
export default fetchData;