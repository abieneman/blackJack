import React from "react"
import Game from '../components/Game'
import { Link } from "react-router-dom"

function BlackJack() {
    return (
    <div>
        <Game />
        <Link to="/">Home</Link>
    </div>
    );
}

export default BlackJack;