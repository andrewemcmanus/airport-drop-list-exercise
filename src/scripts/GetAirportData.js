import { useState, useEffect } from 'react';

export default function GetAirportData() {
    const [airportData, setairportData ] = useState([]);
    useEffect(() => {
      const fetchAirportData = async () => {
        const response = await fetch('https://flare-code-exercise-data.s3.amazonaws.com/airlines.json');
        const data = await response.json();
        setairportData(data);
      };
      fetchAirportData();
    }, []);
    // AIRPORT CODE
    // airportData[i].["Airport"].["Code"]
    // YEAR
    // airportData[i].["Time"].["Year"]
    // MONTH
    // airportData[i].["Time"].["Month"]
    // NUMBER DELAYED
    // airportData[i].["Statistics"].["Flights"].["Delayed"]
    // NUMBER ON TIME
    // airportData[i].["Statistics"].["Flights"].["On Time"]
    // TOTAL
    // airportData[i].["Statistics"].["Flights"].["Total"]
    return airportData;
  };