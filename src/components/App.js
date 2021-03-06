import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import DataList from "../container/DataList";
import axios from "axios";
import Header from "../container/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("https://msico-rails-backend.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // if (
        //   res.data.logged_in &&
        //   this.state.loggedInStatus === "NOT_LOGGED_IN"
        // ) {
        //   this.setState({
        //     loggedInStatus: "LOGGED_IN",
        //     user: res.data.user,
        //   });
        // } else if (
        //   !res.data.logged_in &&
        //   this.state.loggedInStatus === "LOGGED_IN"
        // ) {
        //   this.setState({
        //     loggedInStatus: "NOT_LOGGED_IN",
        //     user: {},
        //   });
        // }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    console.log("hello");
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    console.log(data);
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <div>
                  <Header loggedInStatus={this.state} />
                  <Home
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                </div>
              )}
            ></Route>
            <Route path={"/data"}>
              <DataList user={this.state} />
            </Route>
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
