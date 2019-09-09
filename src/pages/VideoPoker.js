import React from "react"
import Poker from '../components/Poker'
import { Link } from "react-router-dom"

function VideoPoker(props) {
    const state = {
        userName: props.location.state.userName, 
        bank: props.location.state.bank, 
        id: props.location.state.id
    };
    return (
    <div>
        <Poker userName={state.userName} bank={state.bank} id={state.id}/>
        <Link to="/">Home</Link>
    </div>
    );
}

export default VideoPoker;