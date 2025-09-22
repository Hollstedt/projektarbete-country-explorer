import { Link } from "react-router-dom"

export default function Startpage() {
    return (
        <div>
            <h1>Startpage</h1>
            <Link to="/countries"><button>Study countries</button></Link>
            <Link to="/collection"><button>Collection of countries</button></Link>
            <Link to="/quiz"><button>Country quiz</button></Link>
            <Link to="/quizleaderboard"><button>Quiz Leaderboard</button></Link>
        </div>
    )
}