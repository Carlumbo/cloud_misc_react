import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      authorization: "",
      registrationErrors: "",
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
    axios
      .post(
        "https://msico-rails-backend.herokuapp.com/registrations",
        {
          user: {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            authorization: this.state.authorization,
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
        console.log("reg error", error);
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
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
            value={this.state.password_confirmation}
            required
          />
          <input
            type="text"
            name="authorization"
            placeholder="Auhthorization"
            onChange={this.handleChange}
            value={this.state.authorization}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
