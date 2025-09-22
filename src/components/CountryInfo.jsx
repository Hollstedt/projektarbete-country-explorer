export default function CountryInfo({ country }) {
    return (
        <>
            <p><strong>Befolkning: </strong>{country.population}</p>
            <p><strong>Valuta: </strong>{Object.values(country.currencies).map(currency => currency.name).join(", ")}</p>
            <a href={country.maps.googleMaps} target="_blank">Visa i Google Maps</a>
        </>
    )
}