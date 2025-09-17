import { useContext } from "react"
import { CountryDataContext } from "../context/CountryDataContext"

export default function Collection() {

    const { savedCountries } = useContext(CountryDataContext);

    if (savedCountries === 0) {
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
                    <div key={country.name.common}>
                        <img src={country.flags.svg} width="250" alt={`Flag of ${country.name.common}`} />
                        <p>{country.name.common}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}