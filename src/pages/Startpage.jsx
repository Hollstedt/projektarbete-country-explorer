import { Link } from "react-router-dom"

export default function Startpage() {
    return (
        <div>
            <h1>Country Explorer</h1>
            <Link to="/countries">
                <button>Visa alla länder</button>
            </Link>
        </div>
    )
}