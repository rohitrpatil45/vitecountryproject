import React from "react";
import data from "../data.json"; // Import the JSON file
import "./hero.css";

function Herosection() {
  return (
    <>
    <main>
      <div className="container-box">
        {
          data.map((list ,index) => {
            return(
              <div className="country-box" key={index}>
                <img src={list.flags.svg} alt="list.name" />
                <h2> Name :{list.name}</h2>
                <h2> Population:{list.population}</h2>
                <h2>Region:{list.region}</h2>
              </div>
            )
          })
        }
      </div>
    </main>


    </>
  );
}

export default Herosection;
