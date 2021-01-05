import React, { useEffect, useState } from 'react';

export default function CountryStatics({ }) {

  const [country, Setcountry] = useState([]);

  useEffect(() => {

    async function getcountryapi() {
      const countryapi = await fetch('https://api.covid19api.com/summary');
      const countryapijson = await countryapi.json();
      Setcountry(countryapijson.Countries);
    }
    getcountryapi();
  },[])
  console.log(country);

  const Search = ()=>{
    
  };

  return(
    <div>
      <h1>By Country</h1>
      <select name='Country'>
        {
          country.map(obj=>{
            return <option>{obj.Country}</option>
          })
        }
      </select>
      <button onClick={Search}>submit</button>
    </div>
  )

}
