import React from "react"
import Scores from '../components/Scores'
import { Link } from "react-router-dom"

function HighScores() {
    return (
    <div>
        <Scores />
        <Link to="/">Home</Link>
    </div>
    );
}

export default HighScores;