import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CountryDataContext } from "../context/CountryDataContext";

export default function CountryData() {

    const {countryName} = useParams();
    const {selectedCountry, fetchCountryName, saveCountry, savedCountries, removeCountryFromCollection} = useContext(CountryDataContext);
    
    useEffect(() => {
        fetchCountryName(countryName);
    }, [countryName]);
    
    if (!selectedCountry) {
        return null;
    }

    const isCountryAlreadyInCollection = Boolean(savedCountries.find(savedCountry => savedCountry.name.common === selectedCountry.name.common));

    return (
        <div>
            <h1>Country data-page</h1>
            <h2>{selectedCountry.name.common}</h2>
            <img src={selectedCountry.flags.svg} alt="" width="250"/>
            <p><strong>Befolkning: </strong>{selectedCountry.population}</p>
            <p><strong>Valuta: </strong>{Object.values(selectedCountry.currencies).map(currency => currency.name).join(", ")}</p>
            <a href={selectedCountry.maps.googleMaps} target="_blank">Visa i Google Maps</a>
            <button onClick={isCountryAlreadyInCollection ? () => removeCountryFromCollection(selectedCountry) : () => saveCountry(selectedCountry)}>
                {isCountryAlreadyInCollection ? "Ta bort land från collection" : "Spara land i collection"}
            </button>
        </div>
    )
}