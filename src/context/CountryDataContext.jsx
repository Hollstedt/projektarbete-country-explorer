import { createContext, useEffect, useState } from "react";


export const CountryDataContext = createContext();

export const CountryDataProvider = ({ children }) => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [savedCountries, setSavedCountries] = useState([]);

    useEffect(() => {
        const savedCountry = localStorage.getItem("savedCountries");
        if (savedCountry) {
            setSavedCountries(JSON.parse(savedCountry));
        }
    }, []);

    const fetchCountryName = async (countryName) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json()

        setSelectedCountry(data[0])
    }

    const saveCountry = (country) => {
        const savedCountryExists = savedCountries.find(savedCountry => savedCountry.name.common === country.name.common);

        if (!savedCountryExists) {
            const newSavedCountry = [...savedCountries, country];
            setSavedCountries(newSavedCountry);
            localStorage.setItem("savedCountries", JSON.stringify(newSavedCountry));
        }
    }

    const removeCountryFromCollection = (country) => {
        const newSavedCountries = savedCountries.filter(savedCountry => savedCountry.name.common !== country.name.common);
        setSavedCountries(newSavedCountries);
        localStorage.setItem("savedCountries", JSON.stringify(newSavedCountries));
    }

    return (
        <CountryDataContext.Provider value={{ selectedCountry, fetchCountryName, savedCountries, saveCountry, removeCountryFromCollection }}>
            {children}
        </CountryDataContext.Provider>
    )
}