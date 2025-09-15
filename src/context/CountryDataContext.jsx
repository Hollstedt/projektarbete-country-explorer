import { createContext, useState } from "react";


export const CountryDataContext = createContext();

export const CountryDataProvider = ({ children }) => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const fetchCountryName = async (countryName) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json()

        setSelectedCountry(data[0])
    }

    return (
        <CountryDataContext.Provider value={{ selectedCountry, fetchCountryName }}>
            {children}
        </CountryDataContext.Provider>
    )
}