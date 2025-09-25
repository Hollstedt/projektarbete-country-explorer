import { useContext } from "react"
import { CountryDataContext } from "../context/CountryDataContext"
import { useNavigate } from "react-router-dom";
import HandleCountryFlag from "../components/HandleCountryFlag";

export default function Collection() {

    const { savedCountries } = useContext(CountryDataContext);
    const navigate = useNavigate();

    const handleCountryMoreInfo = (countryName) => {
        navigate(`/countries/${countryName}`)
    }

    if (savedCountries.length === 0) {
        return (
            <div>
                <h1>Här är dina sparade länder!</h1>
                <h2>Inga sparade länder</h2>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Dina sparade länder!</h1>
            <h2>Sparade länder</h2>
            <div>
                <ul>
                    {savedCountries.map(country => (
                        <li key={country.name.common}>
                            <HandleCountryFlag key={country.name.common} country={country} onClick={() => handleCountryMoreInfo(country.name.common)} className="country-card"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}