import React, { Component } from "react";
import Deck from './Deck';
import Card from "./Card";
import Hand from "./Hand";

//let myDeck;

class Game extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        myDeck: new Deck(),
        dealerHand: new Hand("dealer"),
        playerHand: new Hand("player"),
        playerTurn: true,
        dealNew: true,
        initialized: false
    };

    initialize() {
        this.state.myDeck.makeDeck();
        this.state.myDeck.shuffleDeck();
        this.setState ({initialized: true});
        
    }

    dealNew() {
        this.state.dealerHand.addCard(this.state.myDeck.getTopCard());
        this.state.dealerHand.addCard(this.state.myDeck.getTopCard());

        this.state.playerHand.addCard(this.state.myDeck.getTopCard());
        this.state.playerHand.addCard(this.state.myDeck.getTopCard());
    }
    
    bust() {
        console.log("busted");
    }

    handleHit = (e) => {
        e.preventDefault();
        this.state.playerHand.addCard(this.state.myDeck.getTopCard());
        if(this.state.playerHand.getValue() > 21) {
            this.bust();
        }
        this.forceUpdate();
    }

    render() {
        //this.state.myDeck = new Deck();

        if(!this.state.initialized) {
            this.initialize();
        }

        if(this.state.dealNew) {
            this.dealNew();
            this.setState ({ dealNew: false });
        }

        return (
            <div>
                <p>dealer: {this.state.dealerHand.getCards()} </p>
                <p>player: {this.state.playerHand.getCards()} {this.state.playerHand.getValue()}</p>
                <form onSubmit={this.handleHit}>
                    <button>hit</button>
                </form>
            </div>
        );
    }
}

export default Game;