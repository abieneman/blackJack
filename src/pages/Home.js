import { Link } from "react-router-dom";
import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";


class Home extends Component {
    constructor(props) {
      super(props)
    }
    state = {
      name: "",
      userName: "Guest",
      password: "",
      action: -1,
      bank: 100,
      id: -1,
      msg: "Login, Create or Delete an Account",
      delete: false,
      hidden: ""
    }

    create = (e) => {
      e.preventDefault();
      this.setState({delete: false});
      this.state.action = "create";
      const body = JSON.stringify(this.state);
      const method = "POST"
      const headers = {'Content-Type': 'application/json'}
      
      fetch(process.env.REACT_APP_API, {
          method,
          headers,
          body
      })
      .then(response => response.json())
      .then(body => {
        this.setState({msg: body.msg});
      })
      .catch(error => console.error(error))
    }

    logIn = (e) => {
      e.preventDefault();
      this.setState({delete: false});
      this.state.action = "log in";
      const body = JSON.stringify(this.state);
      const method = "POST"
      const headers = {'Content-Type': 'application/json'}
      
      fetch(process.env.REACT_APP_API, {
          method,
          headers,
          body
      })
      .then(response => response.json())
      .then(body => {
        if(body.msg == "wrong password") {
          this.setState({msg: "Incorrect Password"});
        } else if(body.msg == "Cannot read property 'password' of undefined") {
          this.setState({msg: "Cannot find user"});
        } else if(body.msg == "user not found") {
          this.setState({msg: "user not found"});
        } else {
          this.setState({hidden: "visibility: hidden", userName: body.name, bank: body.bank, id: body.id, msg: ("" + body.name + ": $" + body.bank) });
        }
      })
      .catch(error => console.error(error))
    }

    delete = (e) => {
      e.preventDefault();
      
      if(!this.state.delete) {
        this.setState({delete: true, msg: "Press delete again to confirm"});
      } else {
        this.state.action = "delete";
        const body = JSON.stringify(this.state);
        const method = "DELETE"
        const headers = {'Content-Type': 'application/json'}
        
        fetch(process.env.REACT_APP_API, {
            method,
            headers,
            body
        })
        .then(response => response.json())
        .then(body => {
          this.setState({msg: body.msg, delete: false})
        })
      }
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value, delete: false });
  };


    render() {
      //dostuff();
      return (
        <div>
          <h2>Home</h2>
          <ul><Link to={{ pathname: "/blackjack", state: {
            userName: this.state.userName, 
            bank: this.state.bank, 
            id: this.state.id }
           }} >blackjack</Link></ul>
          <ul><Link to={{ pathname: "/poker", state: {
            userName: this.state.userName, 
            bank: this.state.bank, 
            id: this.state.id }
           }}>Video Poker</Link></ul>
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