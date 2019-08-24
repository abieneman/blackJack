import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.imageName = "backred.jpg";
        this.char = 'z';
        this.suit = 'x';

    }
    getImageName() {
        return "../images/cards/2H.jpg";
        if(this.char == 'z') {
            return "../images/cards/backred.jpg";
        }
        let suitChar = 'x';
        switch(this.suit) {
            case '♥':
                suitChar = 'H';
                break;

            case '♣':
                suitChar= 'C';
                break;

            case '♦':
                suitChar= 'D';
                break;

            case '♠':
                suitChar= 'S';
                break;
        }
        this.imageName = "../images/cards/";
        this.imageName += this.char;
        this.imageName += suitChar;
        this.imageName += ".jpg";
    }
}

export default Card;