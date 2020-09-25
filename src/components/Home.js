import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    console.log(data + "hsa");
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleRequest() {
    axios
      .get("https://msico-rails-backend.herokuapp.com", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("api error", error);
      });
  }

  handleLogoutClick() {
    axios
      .delete("https://msico-rails-backend.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.handleRequest}>Request Api</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <button
          onClick={() => {
            this.handleLogoutClick();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}
