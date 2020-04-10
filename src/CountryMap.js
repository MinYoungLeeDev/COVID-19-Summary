import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function CountryMap({match}) {
  //State control
  useEffect(() => {
    fetchItems();
    console.log(match);
  },[]);

  //state declaration for an array
  const [countries, setCountries] = useState([]);

  const fetchItems = async () =>{
    //API declaration
    const data = await fetch('https://api.covid19api.com/summary');
    const items = await data.json();
    
    console.log(items.Countries);
    setCountries(items.Countries);

    const i = 0;
  }
    
  return (
    <div>
      <h1>Country</h1>
      {countries.map(countries => (
        <h3 key={countries.Slug+'_'+countries.CountryCode}>
          <Link to={`/CountryMap/${countries.Slug}`}>{countries.Country}</Link>
        </h3>
      ))}
    </div>
  );
}

export default CountryMap;
