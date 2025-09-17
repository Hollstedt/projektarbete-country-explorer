import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CountryDataContext } from "../context/CountryDataContext";

export default function CountryData() {

    const {countryName} = useParams();
    const {selectedCountry, fetchCountryName, saveCountry} = useContext(CountryDataContext);

    
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
            <p><strong>Befolkning: </strong>{selectedCountry.population}</p>
            <p><strong>Valuta: </strong>{Object.values(selectedCountry.currencies).map(currency => currency.name).join(", ")}</p>
            <a href={selectedCountry.maps.googleMaps} target="_blank">Visa i Google Maps</a>
            <br />
            <br />
            <button onClick={() => saveCountry(selectedCountry)}>Spara land i Collection</button>
        </div>
    )
}