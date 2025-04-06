import React, { useState } from "react";
import data from "../data.json"; // Import the JSON file
import "./hero.css";
import FilterElement from "./FilterElement";

function Herosection() {
  const [selectedregion, setselectedreigon] = useState("");

  const filtercountry = selectedregion
    ? data.filter((countries) => countries.region === selectedregion)
    : data;

  const handingoption = (region) => {
    setselectedreigon(region)
    console.log("the region is" ,region)
  };
  return (
    <>
      <main>
        <FilterElement regionoption={handingoption} />
        <div className="container-box">
            {filtercountry.map((list, index) => {
              return (
                <div className="country-box" key={index}>
                  <img src={list.flags.svg} alt="list.name" />
                  <h2> Name :{list.name}</h2>
                  <h2> Population:{list.population}</h2>
                  <h2>Region:{list.region}</h2>
                </div>
              );
            })}
          </div>
   
      </main>
    </>
  );
}

export default Herosection;
