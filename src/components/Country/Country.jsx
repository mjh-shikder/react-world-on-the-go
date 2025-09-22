import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  

    const handleVisited = () => {
        // 1st system
    //   // if(visited) is equavilat to if (visited === true)
    //   if (visited) {
    //     setVisited(false)
    //   }
    //   else {
    //       setVisited(true)
    //   }
        // 2nd system
    //   setVisited(visited ? false : true);
        // 3rd system  
        setVisited(!visited)  
        handleVisitedCountries(country)
  };

    return (
                    //{`country ${visited ? 'country-visited' : ''}`} this will also work
    <div className={`country ${visited && 'country-visited'}`}>
      <img
        className="img"
        src={country.flags.flags.svg}
        alt={country.flags.flags.alt}
      />
      <h3>Name: {country.name.common} </h3>
      <h4>Capital: {country.capital.capital} </h4>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} </p>
      <p>
        Comment: {country.area.area > 214969 ? "Big Country" : "Small Country"}{" "}
      </p>
          <button onClick={handleVisited}>
           {visited? 'Visited':'Not Visited'}   
      </button>
    </div>
  );
};

export default Country;
