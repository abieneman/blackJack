
let deck;

class Card {
}

class Deck {
    deck = [];
    // state = {
    //     test: "testState",
    //     deck: []
    //     //tempCard: new Card
    // };

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
        deck = [... tempDeck];
    }

    shuffleDeck() {
        let tempCard;
        let tempCard2;
        let swapIndex;

        for(let i = 0; i < 52; i++) {
            swapIndex = Math.floor((Math.random() * 52))
            tempCard = new Card();
            tempCard2 = new Card();
            tempCard = deck[i];
            tempCard2 = deck[swapIndex];
            deck[i] = tempCard2;
            deck[swapIndex] = tempCard;
        }
    }

    getTopCard() {
        return deck.pop();
    }

    needToShuffle() {
        if(deck.length < 20) {
            return true;
        }
        return false;
    }
}


let myDeck = new Deck();
myDeck.makeDeck();
myDeck.shuffleDeck();

for(let i = 0; i < 55; i++) {
    console.log(`card #${(i+1)}`);
    console.log(myDeck.getTopCard());
    // if(myDeck.needToShuffle) {
    //     myDeck.makeDeck();
    //     myDeck.shuffleDeck();
    // }
}