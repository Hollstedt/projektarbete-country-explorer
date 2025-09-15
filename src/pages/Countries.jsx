import { useState } from "react"

export default function Countries() {

    const regions = ["Europe", "Asia", "Oceania", "Americas", "Africa"];
    const [selectedRegion, setSelectedRegion] = useState("");
    const [countries, setCountries] = useState([]);

    const handleRegionPick = async (event) => {
        const region = event.target.value;
        setSelectedRegion(region);

        if (region) {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
            console.log("Du har fetchat landet: ", data)
        }
    }


    return (
        <div>
            <h1>Study Countries-page</h1>
            <label>Välj världsdel: </label>
            <select onChange={handleRegionPick}>
                <option value="">Världsdel</option>
                {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                ))}
            </select>

            {selectedRegion && console.log(selectedRegion)}
            
        </div>
    )
}