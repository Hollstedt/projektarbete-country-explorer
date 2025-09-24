import { useContext, useState } from "react"
import RegionSelector from "../components/RegionSelector"
import { CountryDataContext } from "../context/CountryDataContext";


export default function Quiz() {

   const { fetchRegion } = useContext(CountryDataContext);

   const [selectedRegion, setSelectedRegion] = useState("");
   const [playersName, setPlayersName] = useState("");
   const [isQuizStarted, setIsQuizStarted] = useState(false);
   const [randomizedQuizCountries, setRandomizedQuizCountries] = useState([]);
   const [score, setScore] = useState(0);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [userAnswer, setUserAnswer] = useState("");

   const currentCountryForQuiz = randomizedQuizCountries[currentQuestionIndex];



   const handleRegionChange = (event) => {
      setSelectedRegion(event.target.value)
   }

   const handleQuizStart = async () => {
      if (playersName && selectedRegion) {
         const countries = await fetchRegion(selectedRegion);
         const randomCountries = countries.sort(() => 0.5 - Math.random());
         const selectedRandomCountries = randomCountries.slice(0, 15);

         console.log("Länder hämtade från API:", countries.length);
         console.log("Array med random hämtade länder:", selectedRandomCountries, "och det är totalt", selectedRandomCountries.length, "st.")

         setRandomizedQuizCountries(selectedRandomCountries)
         setIsQuizStarted(true)
      } else {
         alert("Ange namn och välj världsdel!")
      }
   }

   const handleUserAnswer = () => {
      const correctAnswer = currentCountryForQuiz.name.common.toLowerCase();
      const userInputAnswer = userAnswer.toLowerCase().trim();

      const isCorrect = correctAnswer === userInputAnswer;

      if (isCorrect) {
         setScore(score + 1)
         alert(`Rätt svar. Score: ${score + 1}`)
      } else {
         alert(`Fel svar. Rätt svar: ${currentCountryForQuiz.name.common}`)
      }

   }

   if (isQuizStarted) {

      return (
         <div>
            <h1>Quiz startat för {playersName}</h1>
            <h2>Vald världsdel: {selectedRegion}</h2>
            <p>Fråga {currentQuestionIndex + 1} av 15</p>
            <p>Poäng: {score}</p>

            <div>
               <img src={currentCountryForQuiz.flags.svg} alt={`Flag of ${currentCountryForQuiz.name.common}`} width="200" />
               <p>Vilket land är det här?</p>
               <input type="text" value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)} placeholder="Ditt svar här..." />
               <button onClick={handleUserAnswer}>Svara</button>
            </div>
         </div>
      )

   } else {

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
}