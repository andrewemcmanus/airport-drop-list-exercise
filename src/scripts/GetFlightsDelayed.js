import GetAirportData from "./GetAirportData";
// state updates
export default function GetFlightsDelayed(code, year, month) {
    const res = GetAirportData();
    const delays = [];
    const totals = [];
    const percentages = [];
    for (let i = 0; i < res.length; i++) {
        let idx = res[i]
        if (idx.["Airport"].["Code"] === code && idx.["Time"].["Year"] === year && idx.["Time"].["Month"] === month) {
            delays.push(idx.["Statistics"].["Flights"].["Delayed"]);
            totals.push(idx.["Statistics"].["Flights"].["Total"]);
        }
    }
    for (let i = 0; i < delays.length; i++) {
        let percent = delays[i] / totals[i]
        percentages.push(percent);
    }
    
    return percentages;
}