import React from "react";
import "./countrypage.css";
import { Link, useParams , useNavigate } from "react-router-dom";
import data from "../data.json";

function CountryPage() {
  const navigate = useNavigate();

  const { alpha3Code } = useParams();
  // const { code } = useParams();

  // const countrydetails = data.find((c) => c.name === alpha3Code)
  const country = data.find((c) => c.alpha3Code === alpha3Code);

  // if (!countrydetails) return <h2>Country not found</h2>;
  return (
    <>
    <div className="main-container-back-btn">
    <button onClick={() => navigate(-1)}>
      Back
    </button>
    </div>
    
      <div className="main-country-page-container">
        
        <div className="page-image-container">
          <img src={country.flags.svg} alt="" />
        </div>
        <div className="country-details-page">
          <div className="detail-right">
            <h2>name: {country.name}</h2>
            <h2>population: {country.population}</h2>
            <h2>region: {country.region}</h2>
            <h2>capital: {country.capital}</h2>
          </div>
          <div className="detail-left">
            <h2>Domain: {country.topLevelDomain}</h2>
            <h2>sub region: {country.subregion}</h2>
            <h2>area: {country.area}</h2>
            <h2>
              Border Share:{" "}
              {country.borders?.length > 0
                ? country.borders.map((border, i) => (
                    <span key={i}>{border.toUpperCase()}, </span>
                  ))
                : "None"}
            </h2>
            {/* <h2>Border Share: {country.borders.map((border,i) => (
              <span key={i}>{border.toUpperCase}</span>
            ))}</h2> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryPage;
