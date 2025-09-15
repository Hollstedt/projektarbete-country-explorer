import { useState } from "react"

export default function Countries() {

    const regions = ["Europe", "Asia", "Oceania", "Americas", "Africa"];
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleRegionPick = (event) => {
        const region = event.target.value;
        setSelectedRegion(region);
    }


    return (
        <div>
            <h1>Study Countries-page</h1>
            <label>Välj världsdel: </label>
            <select onChange={handleRegionPick}>
                <option value="">Världsdel</option>
                {regions.map((region, index) => (
                    <option key={index}>{region}</option>
                ))}
            </select>

            {selectedRegion && <p>{selectedRegion}</p>}
            
        </div>
    )
}