import Card from "./Card"


class Deck {
    constructor() {
        this.deck = [];
    }

    makeDeck()  {
        let tempDeck = [];
        let suit;

        for(let i = 0; i < 4; i++) {
            switch(i) {
                case 0:
                    suit = '♥';
                    break;
                case 1:
                    suit = '♣';
                    break;
                case 2:
                    suit = '♦';
                    break;
                case 3:
                    suit = '♠';
                    break;
            }
            for(let j = 1; j < 14; j++) {
                let tempCard = new Card();
                tempCard.suit = suit;

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
                        case 13:
                            tempCard.char = 'K';
                            break;
                    }
                }
                tempDeck.push(tempCard);
            }
        }
        this.deck = [... tempDeck];
    }

    shuffleDeck() {
        let tempCard;
        let tempCard2;
        let swapIndex;

        for(let i = 0; i < 52; i++) {
            swapIndex = Math.floor((Math.random() * 52))
            tempCard = new Card();
            tempCard2 = new Card();
            tempCard = this.deck[i];
            tempCard2 = this.deck[swapIndex];
            this.deck[i] = tempCard2;
            this.deck[swapIndex] = tempCard;
        }
    }

    getTopCard() {
        return this.deck.pop();
    }

    needToShuffle() {
        if(this.deck.length < 20) {
            return true;
        }
        return false;
    }
}

export default Deck;