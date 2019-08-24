import React from "react"
import Poker from '../components/Poker'
import { Link } from "react-router-dom"

function VideoPoker() {
    return (
    <div>
        <Poker />
        <Link to="/">Home</Link>
    </div>
    );
}

export default VideoPoker;