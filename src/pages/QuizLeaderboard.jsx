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



    return (
        <div>
            <h1>Quiz Leaderboard-page</h1>
            <h2>Leaderboard</h2>
        </div>
    )
}