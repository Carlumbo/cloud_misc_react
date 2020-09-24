import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "created") {
          this.props.handleSuccessfulAuth(res.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });

    event.preventDefault();
    console.log("form sumbmitted");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
