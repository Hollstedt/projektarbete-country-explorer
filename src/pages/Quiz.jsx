import { useState } from "react"
import RegionSelector from "../components/RegionSelector"

export default function Quiz() {

   const [selectedRegion, setSelectedRegion] = useState("");
   const [playersName, setPlayersName] = useState("");
   const [isQuizStarted, setIsQuizStarted] = useState(false);


   const handleRegionChange = (event) => {
      setSelectedRegion(event.target.value)
   }

   const handleQuizStart = () => {
      console.log(playersName, selectedRegion)
      if (playersName && selectedRegion) {
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