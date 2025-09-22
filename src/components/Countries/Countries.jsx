import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [vesitedCountryies, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('visited country', country.name.common);
        const newVisitedCountries = [...vesitedCountryies, country]
        setVisitedCountries(newVisitedCountries)
}

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
          <h1>In the Countries: {countries.length} </h1>
          <h2>Total Country Visited: {vesitedCountryies.length} </h2>
          <ol>
              {
                  vesitedCountryies.map(country => <li>{country.name.common }</li>)
              }
          </ol>
      <div className="countries">
        {countries.map((country) => (
            <Country key={country.cca3.cca3} country={country}
                handleVisitedCountries={handleVisitedCountries}>
                
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
