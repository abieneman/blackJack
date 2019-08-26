import React, { Component } from "react";
import Deck from "./Deck";
import Card from "./Card";

class Poker extends Component {
    constructor(props) {
        super(props);
        this.Image = [
            require("../images/cards/AH.jpg"),
            require("../images/cards/2H.jpg"),
            require("../images/cards/3H.jpg"),
            require("../images/cards/4H.jpg"),
            require("../images/cards/5H.jpg"),
            require("../images/cards/6H.jpg"),
            require("../images/cards/7H.jpg"),
            require("../images/cards/8H.jpg"),
            require("../images/cards/9H.jpg"),
            require("../images/cards/TH.jpg"),
            require("../images/cards/JH.jpg"),
            require("../images/cards/QH.jpg"),
            require("../images/cards/KH.jpg"),
            require("../images/cards/AC.jpg"),
            require("../images/cards/2C.jpg"),
            require("../images/cards/3C.jpg"),
            require("../images/cards/4C.jpg"),
            require("../images/cards/5C.jpg"),
            require("../images/cards/6C.jpg"),
            require("../images/cards/7C.jpg"),
            require("../images/cards/8C.jpg"),
            require("../images/cards/9C.jpg"),
            require("../images/cards/TC.jpg"),
            require("../images/cards/JC.jpg"),
            require("../images/cards/QC.jpg"),
            require("../images/cards/KC.jpg"),
            require("../images/cards/AD.jpg"),
            require("../images/cards/2D.jpg"),
            require("../images/cards/3D.jpg"),
            require("../images/cards/4D.jpg"),
            require("../images/cards/5D.jpg"),
            require("../images/cards/6D.jpg"),
            require("../images/cards/7D.jpg"),
            require("../images/cards/8D.jpg"),
            require("../images/cards/9D.jpg"),
            require("../images/cards/TD.jpg"),
            require("../images/cards/JD.jpg"),
            require("../images/cards/QD.jpg"),
            require("../images/cards/KD.jpg"),
            require("../images/cards/AS.jpg"),
            require("../images/cards/2S.jpg"),
            require("../images/cards/3S.jpg"),
            require("../images/cards/4S.jpg"),
            require("../images/cards/5S.jpg"),
            require("../images/cards/6S.jpg"),
            require("../images/cards/7S.jpg"),
            require("../images/cards/8S.jpg"),
            require("../images/cards/9S.jpg"),
            require("../images/cards/TS.jpg"),
            require("../images/cards/JS.jpg"),
            require("../images/cards/QS.jpg"),
            require("../images/cards/KS.jpg"),
            require("../images/cards/backred.jpg"),
        ];
    }
    state = {
        card1: new Card(),
        card2: new Card(),
        card3: new Card(),
        card4: new Card(),
        card5: new Card(),
        myDeck: new Deck(),
        testString: "../images/cards/4H.jpg",
        turn: 0,
        bank: 100,
        bet: 1
    };

    initialize() {
        this.state.myDeck.makeDeck();
        this.state.myDeck.shuffleDeck();
        this.setState({
            initialized: true,
            card1: this.state.myDeck.getTopCard(),
            card2: this.state.myDeck.getTopCard(),
            card3: this.state.myDeck.getTopCard(),
            card4: this.state.myDeck.getTopCard(),
            card5: this.state.myDeck.getTopCard()
        });
        this.state.card1.flip();
    }

    

    flip = (e) => {
        if(this.state.turn == 0) {
            switch(e.target.name) {
                case "one":
                    this.state.card1.flip();
                    break;
                case "two":
                    this.state.card2.flip();
                    break;
                case "three":
                    this.state.card3.flip();
                    break;
                case "four":
                    this.state.card4.flip();
                    break;
                case "five":
                    this.state.card5.flip();
                    break;
            }
            this.forceUpdate();
        }
    }

    newCards = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        if(this.state.turn == 0) {
            if(this.state.card1.flipped) {
                this.state.card1 = this.state.myDeck.getTopCard();
            }
            if(this.state.card2.flipped) {
                this.state.card2 = this.state.myDeck.getTopCard();
            }
            if(this.state.card3.flipped) {
                this.state.card3 = this.state.myDeck.getTopCard();
            }
            if(this.state.card4.flipped) {
                this.state.card4 = this.state.myDeck.getTopCard();
            }
            if(this.state.card5.flipped) {
                this.state.card5 = this.state.myDeck.getTopCard();
            }
            this.state.turn++;
        }
        this.forceUpdate();
    }

    handleRadio = (e) => {
        console.log("the target is: " + e.target.value);
        this.setState({bet: parseInt(e.target.value)});
        console.log(this.state.bet + 100);
        console.log("the bet is!!!!:: " + this.state.bet);
        this.forceUpdate();
    }

    nextHand = (e) => {
        e.preventDefault();
        if(this.state.turn == 1) {
            this.state.myDeck.makeDeck();
            this.state.myDeck.shuffleDeck();
            this.setState({
            card1: this.state.myDeck.getTopCard(),
            card2: this.state.myDeck.getTopCard(),
            card3: this.state.myDeck.getTopCard(),
            card4: this.state.myDeck.getTopCard(),
            card5: this.state.myDeck.getTopCard(),
            turn: 0
            });
            
        }
    }

    render() {
        if(!this.state.initialized) {
            this.initialize();
        }
        return(
            <div>
                <p>Welcome to video poker!</p>
                {/* this.state.testString */}
                <img name="one" src={this.Image[this.state.card1.getImageName()]} onClick={this.flip} width="10%" height="10%" alt="My Pic"></img>
                <img name="two" src={this.Image[this.state.card2.getImageName()]} onClick={this.flip} width="10%" height="10%" alt="My Pic"></img>
                <img name="three" src={this.Image[this.state.card3.getImageName()]} onClick={this.flip} width="10%" height="10%" alt="My Pic"></img>
                <img name="four" src={this.Image[this.state.card4.getImageName()]} onClick={this.flip} width="10%" height="10%" alt="My Pic"></img>
                <img name="five" src={this.Image[this.state.card5.getImageName()]} onClick={this.flip} width="10%" height="10%" alt="My Pic"></img>
                <form name="theFormName">
                    <button name="trade" onClick={this.newCards}>Trade in cards</button>
                    <button name="nextHand" onClick={this.nextHand}>Next Hand</button>
                </form>
                <div>
                    Bet:<input id="11" type="radio" disabled={!this.state.turn} name="radioSelect" value="1" onClick={this.handleRadio}/>1
                    <input id="22" type="radio" disabled={!this.state.turn} name="radioSelect" value="2" onClick={this.handleRadio} />2
                    <input id="33" type="radio" disabled={!this.state.turn} name="radioSelect" value="3" onClick={this.handleRadio} />3 
                    <input id="44" type="radio" disabled={!this.state.turn} name="radioSelect" value="4" onClick={this.handleRadio} />4
                    <input id="55" type="radio" disabled={!this.state.turn} name="radioSelect" value="5" onClick={this.handleRadio} />5 <br/>
                </div>
                <p>bank: {this.state.bank}</p>
                {/* onSubmit={this.newCards} */}
            </div>
        );
    }
}

export default Poker;