import React, { useState } from "react";
import "./FilerElement.css";

function FilterElement({ regionoption, countrysearch }) {
  const [menu, setmenu] = useState(false);
  const [select, setselected] = useState("");
  const [search, setsearch] = useState("");

  const filerONOff = () => {
    setmenu(!menu);
  };

  const SetectOption = (option) => {
    setselected(option);
    // console.log(select)
    setmenu(!menu);
    regionoption(option);
  };

  return (
    <>
      <div className="filter-element">
        <input
          type="text"
          className="input-tag"
          placeholder="Enter the Country Name"
          onChange={(e) => {
            const values = e.target.value;
            countrysearch(values);
            setsearch(values);
          }}
        />

        <div className="filer-box">
          <button onClick={filerONOff} className="filter-btn">
            Filter
          </button>
          {menu && (
            <div className="filerOption">
              <ul className="ul-list">
                {["Asia", "Africa", "Americas", "Europe"].map((regionName) => {
                  return (
                    <li
                      key={regionName}
                      onClick={() => SetectOption(regionName)}
                    >
                      {regionName}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FilterElement;
