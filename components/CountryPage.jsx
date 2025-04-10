import React, { useEffect, useState } from "react";
import "./countrypage.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

function CountryPage() {
  const navigate = useNavigate();
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null); // ✅ useState to store the country

  useEffect(() => {
    const foundCountry = data.find((c) => c.alpha3Code === alpha3Code);
    setCountry(foundCountry); // ✅ set it in state
  }, [alpha3Code]); // ✅ use correct dependency

  // ⛔ wait until country is loaded
  // if (!country) return <h2>Loading or Country not found</h2>;

  return (
    <>{
      country.length < 1 ? <h1>ruk re lavde</h1> :  (
        <>
         <div className="main-container-back-btn">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>

    <div className="main-country-page-container">
      <div className="page-image-container">
        <img src={country.flags.svg} alt={country.name} />
      </div>
      <div className="country-details-page">
        <div className="detail-right">
          <h2>Name: {country.name}</h2>
          <h2>Population: {country.population}</h2>
          <h2>Region: {country.region}</h2>
          <h2>Capital: {country.capital}</h2>
        </div>
        <div className="detail-left">
          <h2>Domain: {country.topLevelDomain}</h2>
          <h2>Sub Region: {country.subregion}</h2>
          <h2>Area: {country.area}</h2>
          <h2>
            Border Share:{" "}
            {country.borders?.length > 0 ? (
              country.borders.slice(0, 4).map((border, i) => (
                <Link key={i} to={`/country/${border}`}>
                  <span className="borderspan">{border}</span>
                </Link>
              ))
            ) : (
              "None"
            )}
          </h2>
        </div>
      </div>
    </div> </>
      )
    }
   
    </>
  );
}

export default CountryPage;
