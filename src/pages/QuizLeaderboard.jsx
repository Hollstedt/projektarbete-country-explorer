import { useEffect, useState } from "react"

export default function QuizLeaderboard() {

    const [quizResult, setQuizResult] = useState([]);

    const resultForEachRegion = {};

    useEffect(() => {
        const resultsFromLocalStorage = JSON.parse(localStorage.getItem("resultsFromQuiz") || "[]")
        setQuizResult(resultsFromLocalStorage)
    }, [])

    quizResult.forEach(result => {
        if (!resultForEachRegion[result.region]) {
            resultForEachRegion[result.region] = []
        }
        resultForEachRegion[result.region].push(result)
    });

    Object.keys(resultForEachRegion).forEach(region => {
        resultForEachRegion[region].sort((a, b) => b.score - a.score)
        resultForEachRegion[region] = resultForEachRegion[region].slice(0, 3)
    });

    const localStorageHasResults = Object.keys(resultForEachRegion).length > 0;

    return (
        <div>
            <h1>Leaderboard for quiz</h1>

            {!localStorageHasResults && <p className="p-noResult">Inga resultat ännu. Gör ett quiz först!</p>}

            {localStorageHasResults && (
                <div>
                    {Object.keys(resultForEachRegion).map(region => (
                        <div key={region} className="region-result">
                            <h2>{region}</h2>
                            <div className="name-and-score">
                                <ol>
                                    {resultForEachRegion[region].map((result, index) => (
                                        <li key={index}>
                                            <p><strong>{result.userName}:</strong> {result.score} av 15 poäng.</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}