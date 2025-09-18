import { useState } from "react"
import { useNavigate } from "react-router-dom";
import HandleCountryFlag from "../components/HandleCountryFlag";

export default function Countries() {

    const regions = ["Europe", "Asia", "Oceania", "Americas", "Africa"];
    const [selectedRegion, setSelectedRegion] = useState("");
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

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

    const handleCountryPicker = (countryName) => {
        console.log("Klickade på: ", countryName)
        navigate(`/countries/${countryName}`)
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

            <div>
                {countries.map(country => (
                    <HandleCountryFlag key={country.name.common} country={country} onClick={() => handleCountryPicker(country.name.common)}/>
                ))}
            </div>
        </div>
    )
}