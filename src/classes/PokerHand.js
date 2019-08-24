import Card from "../components/Card"
import Deck from "../components/Deck"


class PokerHand {
    constructor() {
        this.hand = [];
    }

    dealNew(deck)  {
        for(let i = 0; i < 5; i++) {
            this.hand.push(deck.getTopCard());
        }
    }

    replaceCard(newCard, index) {
        this.hand[index] = newCard;
    }

    getResult() {
        return 1;
    }
}

export default PokerHand;