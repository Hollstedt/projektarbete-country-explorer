import { useContext, useState } from "react"
import RegionSelector from "../components/RegionSelector"
import { CountryDataContext } from "../context/CountryDataContext";


export default function Quiz() {

   const { fetchRegion } = useContext(CountryDataContext);

   const [selectedRegion, setSelectedRegion] = useState("");
   const [playersName, setPlayersName] = useState("");
   const [isQuizStarted, setIsQuizStarted] = useState(false);
   const [randomizedQuizCountries, setRandomizedQuizCountries] = useState([]);


   const handleRegionChange = (event) => {
      setSelectedRegion(event.target.value)
   }

   const handleQuizStart = async () => {
      if (playersName && selectedRegion) {
         const countries = await fetchRegion(selectedRegion);
         const randomCountries = countries.sort(() => 0.5 - Math.random());
         const selectedRandomCountries = randomCountries.slice(0, 15);

         setRandomizedQuizCountries(selectedRandomCountries)
         setIsQuizStarted(true)
         
      } else {
         alert("Ange namn och välj världsdel!")
      }
   }

   if (isQuizStarted) {
      return (
         <div>
            <h1>Quiz startat för {playersName}</h1>
            <h2>Vald världsdel: {selectedRegion}</h2>
         </div>
      )
   }

   return (
      <div>
         <h1>Quiz-page</h1>
         <div>
            <label>Ditt namn:</label>
            <input type="text" value={playersName} onChange={(event) => setPlayersName(event.target.value)} placeholder="Ange ditt namn..."/>
         </div>
         <RegionSelector selectedRegion={selectedRegion} onRegionChange={handleRegionChange}></RegionSelector>
         <button onClick={handleQuizStart}>Starta quiz</button>
      </div>
   )
}