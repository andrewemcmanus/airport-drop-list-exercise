// import GetAirportData from '../scripts/GetAirportData';
import GetFlightsDelayed from "../scripts/GetFlightsDelayed";

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
    const res = GetFlightsDelayed("ORD", 2007, 8);
    console.log(res);
    if (res.length > 0) {
        // console.log(res);
        return ( 
          <div>
            {res.map((item, idx) => (<ul key={idx}>{item}</ul>))}
          </div>
        )
    } else {
      return (
        <p>Loading...</p>
      )
    }
    
}