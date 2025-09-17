import { useContext } from "react"
import { CountryDataContext } from "../context/CountryDataContext"
import { useNavigate } from "react-router-dom";

export default function Collection() {

    const { savedCountries } = useContext(CountryDataContext);
    const navigate = useNavigate();

    const handleCountryMoreInfo = (countryName) => {
        navigate(`/countries/${countryName}`)
    }

    if (savedCountries.length === 0) {
        return (
            <div>
                <h1>Country collection-page</h1>
                <h2>Sparade länder</h2>
                <p>Inga sparade länder</p>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Country collection-page</h1>
            <h2>Sparade länder</h2>
            <div>
                {savedCountries.map(country => (
                    <div key={country.name.common} onClick={() => handleCountryMoreInfo(country.name.common)}>
                        <img src={country.flags.svg} width="250" alt={`Flag of ${country.name.common}`} />
                        <p>{country.name.common}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}