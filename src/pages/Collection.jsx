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
                    <HandleCountryFlag key={country.name.common} country={country} onClick={() => handleCountryMoreInfo(country.name.common)}/>
                ))}
            </div>
        </div>
    )
}