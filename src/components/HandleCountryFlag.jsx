export default function HandleCountryFlag( {country, onClick}) {
    return (
        <div onClick={onClick}>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="200" />
            <p>{country.name.common}</p>
        </div>
    )
}