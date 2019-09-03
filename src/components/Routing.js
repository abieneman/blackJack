import { BrowserRouter as Router, Route, Link } from "../../node_modules/react-router-dom";
import React from 'react';
import Home from "../pages/Home"
import BlackJack from "../pages/BlackJack"
import VideoPoker from "../pages/VideoPoker"
import HighScores from "../pages/HighScores"


function Routing() {
    return (
        <Router>
            <switch>
                <Route exact path='/' component={Home} />
                <Route path="/blackjack" component={BlackJack} />
                <Route path="/poker" component={VideoPoker} />
                <Route path="/highscores" component={HighScores} />
            </switch>
        </Router>
    );
}
export default Routing;