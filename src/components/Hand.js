import Card from "./Card"


class Hand {
    constructor(player) {
        this.hand = [];
        this.numCards = 0;
        this.player = player;
        this.turn = "player";
        this.numAces = 0;
    }

    setTurn(turn) {
        this.turn = turn;
    }

    getValue() {
        let value = 0;
        for(let i = 0; i < this.numCards; i++) {
            value += this.hand[i].value;
        }
        let tempAces = this.numAces;
        while( (value > 21) && (tempAces > 0) ) {
            value -= 10;
            tempAces--;
        }
        if(value == 0) {
            return "";
        }
        return value;
    }

    getCards() {
        let returnHand = "";
        for(let i = 0; i < this.numCards; i++)  {
            if( (this.player == "dealer") && (i == 0) && (this.turn == "player") ) {
                returnHand += "** ";
            } else {
                returnHand += this.hand[i].char;
                returnHand += this.hand[i].suit;
                returnHand += " ";
            }
        }
        return returnHand;
    }
    
    addCard(newCard)  {
        this.hand.push(newCard);
        this.numCards++;
        if(newCard.char == 'A') {
            this.numAces++;
        }
    }
}

export default Hand;