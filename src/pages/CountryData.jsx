import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CountryDataContext } from "../context/CountryDataContext";
import CountryInfo from '../components/CountryInfo'

export default function CountryData() {

    const {countryName} = useParams();
    const {selectedCountry, fetchCountryName, saveCountry, savedCountries, removeCountryFromCollection} = useContext(CountryDataContext);
    
    useEffect(() => {
        fetchCountryName(countryName);
    }, [countryName, fetchCountryName]);
    
    if (!selectedCountry) {
        return null;
    }

    const isCountryAlreadyInCollection = Boolean(savedCountries.find(savedCountry => savedCountry.name.common === selectedCountry.name.common));

    return (
        <div>
            <h1>Country data-page</h1>
            <h2>{selectedCountry.name.common}</h2>
            <img src={selectedCountry.flags.svg} alt="" width="250"/>
            <CountryInfo country={selectedCountry}/>
            <button onClick={isCountryAlreadyInCollection ? () => removeCountryFromCollection(selectedCountry) : () => saveCountry(selectedCountry)}>
                {isCountryAlreadyInCollection ? "Ta bort land från collection" : "Spara land i collection"}
            </button>
        </div>
    )
}