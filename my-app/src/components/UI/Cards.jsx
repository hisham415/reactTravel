import React from "react";
import Card from "../CardsElement/Card";

const Cards = (props) => {
  return (
    <div className="container containering">
      <div className="heading">
        <div className="text-center category">TRENDY</div>
        <div
          className="text-center best-services-text"
          style={{ color: "#181e4b" }}
        >
          Our Trending Tour Packages
        </div>
      </div>
      <div className="row rowing">
        
              {props.data.map((x,i) => (
                <Card key={i}  data={x}></Card>
              ))}
            </div>
          </div>
  );
};

export default Cards;
