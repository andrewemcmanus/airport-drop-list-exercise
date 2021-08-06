import { useState, useEffect } from 'react';

function GetAirportData() {
    const [airportData, setairportData ] = useState([]);
    useEffect(() => {
      const fetchAirportData = async () => {
        const response = await fetch('https://flare-code-exercise-data.s3.amazonaws.com/airlines.json');
        const data = await response.json();
        setairportData(data);
      };
      fetchAirportData();
    }, []);
    return airportData;
  };

// TO DO:
// Build calculation scripts in scripts folder
// Build DropDownMenu component
// Build MultiSelect component
// Build Grid component
// useState to control numbers in grid
// styled components
// header and footer

// Mapping data into grid and drop down menus

export default function Home() {
    const res = GetAirportData();
    console.log(res);
    if (res.length > 0) {
        // console.log(res);
        // console.log(sample);
        return ( 
          <div>
            {res.map((item, idx) => (<ul key={idx}>{item.["Airport"].["Code"]}</ul>))}
          </div>
        )
    } else {
      return (
        <p>Loading...</p>
      )
    }
    
}