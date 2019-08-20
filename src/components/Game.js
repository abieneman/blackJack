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
        dealNew: false,
        initialized: false,
        busted: false,
        handResult: "Ready for next hand",
        handOver: true,
        isStart: false,
        bet: 5,
        bank: 100
    };

    // initialize() {
    //     this.state.myDeck.makeDeck();
    //     this.state.myDeck.shuffleDeck();
    //     this.setState ({initialized: true, bank: 100});
    //     this.forceUpdate();
        
    // }

    dealNew() {
        this.setState({handResult: "Make your move!" });
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
        this.setState({isStart: false});
        if(!this.state.handOver) {
            if(!this.state.busted) {
                this.state.playerHand.addCard(this.state.myDeck.getTopCard());
                if(this.state.playerHand.getValue() > 21) {
                    this.lose();
                    this.setState({
                        busted: true,
                        handResult: "player busted",
                        handOver: true
                    });
                }
            }
        }
        this.forceUpdate();
    }

    handleBetPlus = (e) => {
        e.preventDefault();
        if(this.state.handOver) {
            if(this.state.bet < this.state.bank) {
                this.state.bet++;
            }
        }
        this.forceUpdate();
    }

    handleBetMinus = (e) => {
        e.preventDefault();
        if(this.state.handOver) {
            if(this.state.bet > 0) {
                this.state.bet--;
            }
        }
        this.forceUpdate();
    }

    handleStartOver = (e) => {
        //it just refreshes the page
    }

    handleStay = (e) => {
        e.preventDefault();
        if(!this.state.handOver) {
            this.setState( {playerTurn: false});
        }
        this.forceUpdate();
    }

    handleNewHand = (e) => {
        e.preventDefault();
        if(this.state.handOver) {
            if(this.state.myDeck.needToShuffle()) {
                this.state.myDeck.makeDeck();
                this.state.myDeck.shuffleDeck();
            }
            this.setState({
                dealNew: true,
                playerTurn: true,
                busted: false,
                handResult: "Ready for next hand",
                handOver: false,
                isStart: true ,
                dealerHand: new Hand("dealer"),
                playerHand: new Hand("player")
            });

        }
        this.forceUpdate();
    }

    blackJack() {
        this.setState({handResult: "blackjack", handOver: true, isStart: false});
        this.state.bank += Math.round(this.state.bet * 1.5);
    }

    lose() {
        this.state.bank -= this.state.bet;
        if(this.state.bet > this.state.bank) {
            this.state.bet = this.state.bank;
        }
    }

    win() {
        this.state.bank += this.state.bet;
    }

    render() {
        //this.state.myDeck = new Deck();

        // if(!this.state.initialized) {
        //     this.initialize();
        // }

        if(this.state.dealNew) {
            this.dealNew();
            this.setState ({ dealNew: false });
        }

        if(this.state.isStart) {
            if(this.state.playerHand.getValue() == 21) {
                this.blackJack();
            }
        }

        if(!this.state.playerTurn) {
            this.state.dealerHand.setTurn("dealer");
            this.state.playerHand.setTurn("dealer");
            while(this.state.dealerHand.getValue() < 17) {
                this.state.dealerHand.addCard(this.state.myDeck.getTopCard());
            }
            if(this.state.dealerHand.getValue() > 21) {
                this.win();
                this.setState({handResult: "dealer busts", handOver: true});
            } else if(this.state.dealerHand.getValue() == this.state.playerHand.getValue()) {
                this.setState({handResult: "push", handOver: true});
            } else if(this.state.dealerHand.getValue() > this.state.playerHand.getValue()) {
                this.lose();
                this.setState({handResult: "dealer wins", handOver: true});
            } else if(this.state.dealerHand.getValue() < this.state.playerHand.getValue()) {
                this.win();
                this.setState({handResult: "player wins", handOver: true});
            }
            this.setState({playerTurn: true});
            // this.state.dealerHand.setTurn("player");
            // this.state.playerHand.setTurn("player");
            this.forceUpdate();
        }

        return (
            <div>
                <p>Cards in deck: {this.state.myDeck.getNumCards()}</p>
                <p>dealer: {this.state.dealerHand.getCards()} </p>
                <p>player: {this.state.playerHand.getCards()} {this.state.playerHand.getValue()}</p>
                <form onSubmit={this.handleHit}>
                    <button>hit</button>
                </form>
                <form onSubmit={this.handleStay}>
                    <button>stay</button>
                </form>
                <p>{this.state.handResult}</p>
                <form onSubmit={this.handleNewHand}> 
                    <button>Next Hand</button>
                </form>
                <form onSubmit={this.handleBetPlus}>
                    <button>Bet+</button>
                </form>
                <form onSubmit={this.handleBetMinus}>
                    <button>Bet-</button>
                </form>
                <p>Bet: {this.state.bet}</p>
                <p>Bank: {this.state.bank}</p>
                <form onSubmit={this.handleStartOver}>
                    <button>Start Over</button>
                </form>
            </div>
        );
    }
}

export default Game;