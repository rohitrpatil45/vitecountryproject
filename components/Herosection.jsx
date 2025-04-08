import React, { useState } from "react";
import data from "../data.json"; // Import the JSON file
import "./hero.css";
import FilterElement from "./FilterElement";
import { Link } from "react-router-dom";

function Herosection() {
  const [selectedregion, setselectedreigon] = useState("");
  const [searchitem, setsearchitme] = useState("");

  // const filtercountry = selectedregion
  //   ? data.filter((countries) => countries.region === selectedregion)
  //   : data

  const filtercountry = data.filter((country) => {
    const matchRegion = selectedregion
      ? country.region === selectedregion
      : true;
    const matchSearch = searchitem
      ? country.name.toLowerCase().includes(searchitem.toLowerCase())
      : true;
    return matchRegion && matchSearch;
  });

  const handingoption = (region) => {
    setselectedreigon(region);
    console.log("the region is", region);
  };

  // const seacrch = (search) => {
  //   console.log("this is search thing" , search)
  //   setsearchitme(seacrch);
  // }

  const seacrch = (search) => {
    console.log("this is search thing", search);
    setsearchitme(search); // ✅ Correct: using the actual value from input
  };
  return (
    <>
      <main>
        <FilterElement regionoption={handingoption} countrysearch={seacrch} />
        <div className="container-box">
          {filtercountry.map((list, index) => {
            return (
              <Link to={`/country/${list.alpha3Code}`}>
              <div className="country-box" key={index}>
                <img src={list.flags.svg} alt="list.name" />
                <h2> Name :{list.name}</h2>
                <h2> Population:{list.population}</h2>
                <h2>Region:{list.region}</h2>
              </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Herosection;
