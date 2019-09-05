import { Link } from "react-router-dom";
import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";


class Home extends Component {
    constructor(props) {
      super(props)
    }
    state = {
      name: "bob",
      userName: "",
      password: false,
      action: -1,
      bank: -1,
      id: -1,
      msg: "Login, Create or Delete an Account",
      delete: false,
      hidden: ""
    }

    create = (e) => {
      e.preventDefault();
      this.state.action = "create";
      const body = JSON.stringify(this.state);
      const method = "POST"
      const headers = {'Content-Type': 'application/json'}
      
      fetch("http://localhost:5000", {
          method,
          headers,
          body
      })
      .then(response => response.json())
      .then(body => {
        console.log(body.msg);
        if(body.msg == "wrong password") {
          this.setState({msg: "Incorrect Password"});
        } else if(body.msg == "Cannot read property 'password' of undefined") {
          this.setState({msg: "Cannot find user"});
        } else {
          console.log(body);
          this.setState({hidden: "visibility: hidden", userName: body.name, bank: body.bank, id: body.id, msg: ("" + body.name + ": $" + body.bank) });
        }
      })
      .catch(error => console.error(error))
    }

    logIn = (e) => {
      e.preventDefault();
      this.state.action = "log in";
      const body = JSON.stringify(this.state);
      const method = "POST"
      const headers = {'Content-Type': 'application/json'}
      
      fetch("http://localhost:5000", {
          method,
          headers,
          body
      })
      .then(response => response.json())
      .then(body => {
        console.log(body.msg);
        if(body.msg == "wrong password") {
          this.setState({msg: "Incorrect Password"});
        } else if(body.msg == "Cannot read property 'password' of undefined") {
          this.setState({msg: "Cannot find user"});
        } else {
          console.log(body);
          this.setState({hidden: "visibility: hidden", userName: body.name, bank: body.bank, id: body.id, msg: ("" + body.name + ": $" + body.bank) });
        }
      })
      .catch(error => console.error(error))
    }

    delete = (e) => {
      e.preventDefault();
      if(!this.state.delete) {
        this.setState({delete: true, msg: "Press delete again to confirm"});
      }
      console.log("dele!");
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
  };


    render() {
      console.log(`${this.state.name} , ${this.state.password}`);
      //dostuff();
      return (
        <div>
          <h2>Home</h2>
          <ul><Link to="/blackjack">blackjack</Link></ul>
          <ul><Link to="/poker">Video Poker</Link></ul>
          <ul><Link to="/highscores">Leader Board</Link></ul>
          <div Style={this.state.hidden}> 
            <form>
              Username:<input name="name" type="text" placeholder="username" onChange={this.handleChange}></input>
              Password:<input name="password" type="text" placeholder="password" onChange={this.handleChange}></input>
              <button onClick={this.logIn}>Log in</button>
              <button onClick={this.create}>Create new User</button>
              <button onClick={this.delete}>Delete Account</button>
            </form>
          </div>
          <p>{this.state.msg}</p>
        </div>
      );
    }
  }

  export default Home;