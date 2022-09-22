import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";

import SignUp from "./components/SignUp";

function App() {
  const user = "null";

  return (
    <Router>
      {!user ? (
        <SignUp />
      ) : (
        <div className="app">
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/gmailLogin" exact>
              <Login />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
