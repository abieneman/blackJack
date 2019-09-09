import React from "react"
import Game from '../components/Game'
import { Link } from "react-router-dom"

function BlackJack(props) {
    const state = {
        userName: props.location.state.userName, 
        bank: props.location.state.bank, 
        id: props.location.state.id
    };
    return (
    <div>
        {/* <p> well hello {state.userName}</p> */}
        <Game userName={state.userName} bank={state.bank} id={state.id}/>
        <Link to="/">Home</Link>
    </div>
    );
}

export default BlackJack;