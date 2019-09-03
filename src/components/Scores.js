import React, { Component } from "react";
import Deck from "./Deck";
import Card from "./Card";

class Scores extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        scores: [
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
            {name: "", bank: ""},
        ],
        initialized: false,
    }

    componentDidMount() {
        console.log("hello there");
        fetch("http://localhost:5000")
              .then(response => response.json())
              .then(body => this.setState({scores: body}))
              .then(hello => {
                let sorted = [... this.state.scores];
                sorted.sort(function(a,b) {
                    return b.bank - a.bank;
                });
                this.setState({initialized: true, scores: sorted})
              })
              .catch(console.log);
    }

    initialize = () => {
        let sorted = this.state.scores.slice(0);
        sorted.sort(function(a,b) {
            return a.bank - b.bank;
        });
        //this.setState({initialized: true, scores: sorted})
        return "hello";
    }

    render() {
        // if(!this.state.initialized) {
        //     this.initialize();
        // }
        console.log(this.state.scores[0].name);
        return(
            <div>
                <p>{this.state.scores[0].name}...............{this.state.scores[0].bank}</p>
                <p>{this.state.scores[1].name}...............{this.state.scores[1].bank}</p>
                <p>{this.state.scores[2].name}...............{this.state.scores[2].bank}</p>
                <p>{this.state.scores[3].name}...............{this.state.scores[3].bank}</p>
                <p>{this.state.scores[4].name}...............{this.state.scores[4].bank}</p>
                <p>{this.state.scores[5].name}...............{this.state.scores[5].bank}</p>
                <p>{this.state.scores[6].name}...............{this.state.scores[6].bank}</p>
                <p>{this.state.scores[7].name}...............{this.state.scores[7].bank}</p>
                <p>{this.state.scores[8].name}...............{this.state.scores[8].bank}</p>
                <p>{this.state.scores[9].name}...............{this.state.scores[9].bank}</p>
                
            </div>
        );
    }


}
export default Scores;