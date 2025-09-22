import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country.area.area);
    
    const handleVisited = () => {
        console.log('dhon clicked');
        
    }

    return (
        <div className='country'>
            <img className='img' src={country.flags.flags.svg} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h4>Capital: {country.capital.capital} </h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}  </p>
            <p>Comment: {country.area.area > 214969 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;