import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [vesitedCountryies, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('visited country', country.name.common);
        const newVisitedCountries = [...vesitedCountryies, country]
        setVisitedCountries(newVisitedCountries)
    }
    
    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        
    }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
          <h1>In the Countries: {countries.length} </h1>
          <h2>Total Country Visited: {vesitedCountryies.length} </h2>
          <h2>Total Flags Visited:{visitedFlags.length} </h2>
          <ol>
              {
                  vesitedCountryies.map(country => <li key={country.cca3.cca3}>
                      {country.name.common}</li>)
              }
          </ol>

          <div className="visited-flags-container">
              {
                  visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
              }
          </div>

      <div className="countries">
        {countries.map((country) => (
            <Country key={country.cca3.cca3} country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag ={handleVisitedFlag}
            ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
