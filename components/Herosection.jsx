import React from "react";
import data from "../data.json"; // Import the JSON file
import "./hero.css";

function Herosection() {
  return (
    <>
      <main>
        <div className="container-box">
          <div className="main-container">
            {data.map((item) => {
              console.log(item); // Move console.log outside JSX

              return (
                <div className="main-box-contianer">
                  <div className="country-box" key={item.id}>
                    <img src={item.flags.svg} alt={item.name} />{" "}
                    {/* ✅ Fixed img src */}
                    <h2>{item.name}</h2>
                    <p>Capital: {item.capital}</p>
                    {/* ✅ Fixed the label for clarity */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Herosection;
