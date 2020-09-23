import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/dashboard"}>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
