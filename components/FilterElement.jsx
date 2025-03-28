import React from "react";
import "./FilerElement.css";

function FilterElement() {
  return (
    <>
      <div className="filter-element">
        <input type="text" className="input-tag" placeholder="Enter the Country Name" />

        <div className="filer-box">
          <button className="filter-btn">Filter</button>
        </div>
      </div>
    </>
  );
}

export default FilterElement;
