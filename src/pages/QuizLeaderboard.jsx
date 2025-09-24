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
            <h1>Quiz Leaderboard-page</h1>
            <h2>Leaderboard</h2>

            {!localStorageHasResults && <p>Inga resultat ännu. Gör ett quiz först!</p>}

            {localStorageHasResults && (
                <div>
                    {Object.keys(resultForEachRegion).map(region => (
                        <div key={region}>
                            <h2>{region}</h2>
                            <ul>
                                {resultForEachRegion[region].map((result, index) => (
                                    <li key={index}>
                                        {result.userName}: {result.score} av 15 poäng.
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}