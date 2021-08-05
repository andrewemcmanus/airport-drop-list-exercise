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
    console.log(airportData);
    return airportData;
  };

// styled components

export default function Home() {
    GetAirportData();
    // add header and footer
    return ( 
        <p>{2}</p>
    )
}