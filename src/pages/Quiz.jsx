import { useContext, useState } from "react"
import RegionSelector from "../components/RegionSelector"
import { CountryDataContext } from "../context/CountryDataContext";
import { useNavigate } from "react-router-dom";


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

   const navigate = useNavigate();

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

   const handleUserAnswer = () => {
      const correctAnswer = currentCountryForQuiz.translations?.swe?.common.toLowerCase();
      const userInputAnswer = userAnswer.toLowerCase().trim();

      const isCorrect = correctAnswer === userInputAnswer;

      if (isCorrect) {
         setScore(score + 1)
         alert(`Rätt svar. Du har nu ${score + 1} poäng!`)
      } else {
         alert(`Fel svar. Rätt svar var ${currentCountryForQuiz.translations?.swe?.common}.`)
      }

      if (currentQuestionIndex < 14) {
         setCurrentQuestionIndex(currentQuestionIndex + 1)
         setUserAnswer("");
      } else {
         const userFinalScore = score + (isCorrect ? 1 : 0);
         alert(`Quiz över. Dina poäng är: ${userFinalScore} av 15`)

         const usersFinalQuizResult = {
            userName: playersName,
            region: selectedRegion,
            score: userFinalScore
         };

         const resultsInLocalStorage = JSON.parse(localStorage.getItem("resultsFromQuiz") || "[]");
         resultsInLocalStorage.push(usersFinalQuizResult);
         localStorage.setItem("resultsFromQuiz", JSON.stringify(resultsInLocalStorage));

         setTimeout(() => {
            navigate('/quizleaderboard');
         }, 500)
      }
   }

   if (isQuizStarted) {
      return (
         <div>
            <h1>Quiz startat för {playersName}</h1>
            <p>Fråga nummer {currentQuestionIndex + 1} av 15</p>
            <p>Poäng: {score}</p>

            <div className="quiz-page-container">
               <div className="country-card">
                  <img src={currentCountryForQuiz.flags.svg} alt={`Flag of ${currentCountryForQuiz.name.common}`} width="200" />
               </div>
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