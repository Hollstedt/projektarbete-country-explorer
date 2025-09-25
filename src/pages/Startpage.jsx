import { Link } from "react-router-dom"

export default function Startpage() {
    return (
        <div className="startpage-container">
            <h1>COUNTRY EXPLORER QUIZ</h1>
            <div className="startpage-button-container">
                <div className="startpage-button-upper-container">
                    <Link to="/countries"><button>Studera länder</button></Link>
                    <Link to="/collection"><button>Dina sparade länder</button></Link>
                </div>
                <div className="startpage-button-lower-container">
                    <Link to="/quiz"><button>Quiz om länder</button></Link>
                    <Link to="/quizleaderboard"><button>Quiz - Topplista</button></Link>
                </div>
            </div>
        </div>
    )
}