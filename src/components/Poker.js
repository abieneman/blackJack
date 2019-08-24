import React, { Component } from "react";
import Deck from "./Deck";
import Card from "./Card";

class Poker extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        testCard: new Card(),
        myDeck: new Deck(),
        initialized: false,
        testString: "../images/cards/2H.jpg"
    };

    initialize() {
        this.state.myDeck.makeDeck();
        this.state.myDeck.shuffleDeck();
        this.setState({initialized: true});
    }

    render() {
        if(!this.state.initialized) {
            this.initialize();
        }
        return(
            <div>
                <p>Welcome to video poker!</p>
                {/* this.state.testString */}
                <img src={require("../images/cards/2H.jpg")} width="10%" height="10%" alt="My Pic"></img>
            </div>
        );
    }
}

export default Poker;