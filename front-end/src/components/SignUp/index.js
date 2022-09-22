import React, { Component } from "react";
import "./SignUp.css";

import { createBrowserHistory } from "history";

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (e.target.email.value && e.target.password.value) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    alert("Goes to registration page");
  };

  handleClickGmail = (e) => {
    e.preventDefault();
    alert("Goes to Gmail page");
    createBrowserHistory().push("/gmailLogin");
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Log In</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Sign Up
        </button>
        <button className="primary" onClick={this.handleClickGmail}>
          Sign Up with GMAIL
        </button>
      </div>
    );
  }
}

export default App;
