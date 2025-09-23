export default function RegionSelector( {selectedRegion, onRegionChange} ) {
    
    const regions = ["Europe", "Asia", "Oceania", "Americas", "Africa"];

    return (
        <div>
            <label>Välj världsdel:</label>
            <select value={selectedRegion} onChange={onRegionChange}>
                <option value="">Världsdel</option>
                {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                ))}
            </select>
        </div>
    )
}