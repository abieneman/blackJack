import { Link } from "react-router-dom";
import React from "react"

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <ul><Link to="/blackjack">blackjack</Link></ul>
        <ul><Link to="/poker">Video Poker</Link></ul>
      </div>
    )
  }

  export default Home;