import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CountryDataContext } from "../context/CountryDataContext";

export default function CountryData() {

    const {countryName} = useParams();
    const {selectedCountry, fetchCountryName} = useContext(CountryDataContext);
    
    useEffect(() => {
        fetchCountryName(countryName);
    }, [countryName]);

    if (!selectedCountry) {
        return null;
    }

    return (
        <div>
            <h1>Country data-page</h1>
            <h2>{selectedCountry.name.common}</h2>
            <img src={selectedCountry.flags.svg} alt="" width="250"/>
            <br />
            <button onClick={() => console.log("Sparar landet", selectedCountry.name.common, "i Collection")}>Spara land i Collection</button>
            {/* YOU ARE HERE, kör på med CountryDataContext */}
        </div>
    )
}