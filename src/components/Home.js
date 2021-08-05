import React, { useState, useEffect } from 'react';

function GetAirportData() {
    const [airportData, setairportData ] = useState([]);
    useEffect(() => {
      const fetchAirportData = async () => {
        const response = await fetch('https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json');
        const data = await response.json();
        setairportData(data);
      };
      fetchAirportData();
    }, []);
    // console.log(airportData);
    return airportData;
  };

// TO DO:
// Build calculation scripts in scripts folder
// Build DropDownMenu component
// Build Grid component
// useState to control numbers in grid
// styled components
// header and footer

// Mapping data into grid and drop down menus

export default function Home() {
    const res = GetAirportData();
    // console.log(res[0]);
    if (res) {
        // console.log(res);
        // const sample = res[0];
        // console.log(sample);
        // to insert: mapping function
        return ( 
            <p>{sample.Airport.Code}</p>
        )
    }
    
}