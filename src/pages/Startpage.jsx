import { Link } from "react-router-dom"

export default function Startpage() {
    return (
        <div>
            <h1>Startpage</h1>
            <Link to="/countries"><button>Studera länder</button></Link>
            <Link to="/collection"><button>Dina sparade länder</button></Link>
            <Link to="/quiz"><button>Quiz om länder</button></Link>
            <Link to="/quizleaderboard"><button>Quiz - Topplista</button></Link>
        </div>
    )
}