export default function HandleCountryFlag( {country, onClick, className}) {
    return (
        <div onClick={onClick} className={className}>
            <h2>{country.translations?.swe?.common}</h2>
            <img src={country.flags.svg} alt={`${country.translations?.swe?.common}s flagga`} className="flag-image" />
        </div>
    )
}