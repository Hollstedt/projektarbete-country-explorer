import { Link } from "react-router-dom"

export default function Startpage() {
    return (
        <div>
            <h1>Country Explorer</h1>
            <Link to="/countries">
                <button>Study countries</button>
            </Link>
            <Link to="/collection">
                <button>Collection of countries</button>
            </Link>
        </div>
    )
}