export default function RegionSelector( {selectedRegion, onRegionChange} ) {
    
    const regions = [
        { swedish: "Europa", english: "Europe" },
        { swedish: "Asien", english: "Asia" },
        { swedish: "Oceanien", english: "Oceania" },
        { swedish: "Amerika", english: "Americas" },
        { swedish: "Afrika", english: "Africa" }
    ];

    return (
        <div>
            <label>Välj världsdel:</label>
            <select value={selectedRegion} onChange={onRegionChange}>
                <option value="">Världsdel</option>
                {regions.map((region, index) => (
                    <option key={index} value={region.english}>{region.swedish}</option>
                ))}
            </select>
        </div>
    )
}