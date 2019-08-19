//export default Deck;
import Card from './Card';
import React, { Component } from "react";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.makeDeck();
        console.log("deck constructor");
         //shuffleDeck();
    }
    state = {
        test: "testState",
        deck: []
        //tempCard: new Card
    };

    makeDeck()  {
        let tempDeck = [];
        let tempCard = new Card();
        let suit = 'h';

        for(let i = 0; i < 4; i++) {
            switch(i) {
                case 0:
                    suit = 'h';
                    break;
                case 1:
                    suit = 'c';
                    break;
                case 2:
                    suit = 'd';
                    break;
                case 3:
                    suit = 's';
                    break;
            }

            tempCard.suit = suit;

            for(let j = 1; j < 14; j++) {
                tempCard.value = j;
                tempCard.char = '' + j;
                if( (j>9) || (j == 1) ) {
                    tempCard.value = 10;
                    switch(j) {
                        case 1:
                            tempCard.value = 11;
                            tempCard.char = 'A';
                            break;
                        case 10: 
                            tempCard.char = 'T';
                            break;
                        case 11:
                            tempCard.char = 'J';
                            break;
                        case 12:
                            tempCard.char = 'Q';
                            break;
                        case 15:
                            tempCard.char = 'K';
                            break;
                    }
                }
                tempDeck.push(tempCard);
            }
        }
        this.state = {test: "myTest", deck: [... tempDeck]};
    }
}

export default Deck;