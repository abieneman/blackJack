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
        bet: 1,
        initialized: false,
        payMessage: "Trade in cards",
        payColor: "blue"
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
        this.setState({bet: parseInt(e.target.value)});
        this.forceUpdate();
    }

    nextHand = (e) => {
        e.preventDefault();
        if(this.state.turn == 3) {
            this.setState({payMessage: "Trade in cards",
                           payColor: "blue"
                        });
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
    scoreHand() {
        this.setState({ payMessage: this.scoreHandHelper(),
                        turn: 3});
        this.forceUpdate();
    }

    scoreHandHelper() {
        let valueArray = [];
        let flush = false;
        this.setState({payColor: "green"});
        let charSuit = this.state.card1.suit;

        if( (this.state.card2.suit == charSuit) && (this.state.card3.suit == charSuit) && (this.state.card4.suit == charSuit) && (this.state.card5.suit == charSuit) ) {
            flush = true;
        }
        valueArray.push(this.state.card1.getPokerValue());
        valueArray.push(this.state.card2.getPokerValue());
        valueArray.push(this.state.card3.getPokerValue());
        valueArray.push(this.state.card4.getPokerValue());
        valueArray.push(this.state.card5.getPokerValue());
        valueArray.sort(function(a,b) { return a - b; });

        if(flush && (valueArray[0] == 10) ) {
            this.setState({bank: (this.state.bank + (500 * this.state.bet))});
            return "Royal Flush  + 500x Bet"
        }
        let topOfStraightValue = (valueArray[0] + 4)
        if( ( ((valueArray[1] + 3) == topOfStraightValue) && ((valueArray[2] + 2) == topOfStraightValue) && ((valueArray[3] + 1) == topOfStraightValue) && ((valueArray[4] + 0) == topOfStraightValue) )
          || (valueArray[0] == 2) && (valueArray[1] == 3) && (valueArray[2] == 4) && (valueArray[3] == 5) && (valueArray[4] == 14) ) {
            if(flush) {
                this.setState({bank: (this.state.bank + (100 * this.state.bet))});
                return "Straight Flush  + 100x Bet"
            } else {
                this.setState({bank: (this.state.bank + (8 * this.state.bet))});
                return "Straight  + 8x Bet"
            }
        }
        if(flush) {
            this.setState({bank: (this.state.bank + (12 * this.state.bet))});
            return "Flush  + 12x Bet"
        }

        let pairsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let pairsValue = 0;

        for(let i = 0; i < 5; i++) {
            pairsValue = (valueArray[i] - 2);
            pairsArray[pairsValue]++;
        }
        let pairValue = pairsArray.indexOf(2);
        pairsArray.sort(function(a,b) { return a - b; });

        if(pairsArray[12] == 4) {
            this.setState({bank: (this.state.bank + (50 * this.state.bet))});
            return "4 of a kind + 50x Bet";
        }
        if(pairsArray[12] == 3) {
            if(pairsArray[11] == 2) {
                this.setState({bank: (this.state.bank + (18 * this.state.bet))});
                return "Full House  + 18x Bet";
            } else {
                this.setState({bank: (this.state.bank + (6 * this.state.bet))});
                return "3 of a kind + 6x Bet";
            }
        }
        if( (pairsArray[12] == 2) && (pairsArray[11] == 2) ) {
            this.setState({bank: (this.state.bank + (4 * this.state.bet))});
            return "2 pair + 4x Bet"
        }
        if( (pairsArray[12] == 2) && (pairValue > 8) ) {
            this.setState({bank: (this.state.bank + (2 * this.state.bet))});
            return "Jacks or better + 2x Bet";
        }

        this.setState({payColor: "red",
                       bank: (this.state.bank - (1 * this.state.bet))
                    });
        return "No Score";
    }

    render() {
        if(!this.state.initialized) {
            this.initialize();
        }
        if(this.state.turn == 1) {
            this.scoreHand();
        }
        return(
            <div>
                <p>Welcome to video poker!</p>
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
                <font color={this.state.payColor}>{"" + this.state.payMessage}</font>
                <p>bank: {this.state.bank}</p>
            </div>
        );
    }
}

export default Poker;