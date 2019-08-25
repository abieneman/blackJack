import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.imageName = "backred.jpg";
        this.char = 'z';
        this.suit = 'x';
        this.flipped = false;
    }

    flip() {
        if(this.flipped) {
            this.flipped = false;
        } else {
            this.flipped = true;
        }
    }

    getImageName() {

        if(this.flipped) {
            return 52;
        }

        let valuePath = 0;

        switch(this.value) {
            case 10:
                if(this.char == 'T') {
                    valuePath = 10;
                } else if(this.char == 'J') {
                    valuePath = 11;
                } else if(this.char == 'Q') {
                    valuePath = 12;
                } else if(this.char == 'K') {
                    valuePath = 13;
                }
                break;
            case 11:
                valuePath = 1;
                break;
            default:
                valuePath = this.value;
                break;
        }
        valuePath--;
        switch(this.suit) {
            case '♥':
                //doNothing()
                break;

            case '♣':
                valuePath += 13;
                break;

            case '♦':
                valuePath += 26;
                break;

            case '♠':
                valuePath += 39;
                break;
        }
        return valuePath;
    }
}

export default Card;