import React, {useEffect, useState} from 'react'
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ForthSection from "./ForthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";
import NinthSection from "./NinthSection";
import Footer from "./footer";
import Cards from "./Cards";
const Home = props => {
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
    <div>
        <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <Cards data={data} />
      <NinthSection />
      <Footer />
    </div>
  )
}

export default Home;