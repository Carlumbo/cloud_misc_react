import React, { Component } from "react";
import axios from "axios";

class DataCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      title: "",
      user_id: "",
      datainfo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log("formation");
  }

  handleSubmit(event) {
    axios
      .post(
        "http://localhost:3001/products",
        {
          product: {
            type: this.state.type,
            title: this.state.title,
            user_id: this.user.id,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("create error", error);
      });

    event.preventDefault();
    alert("data submitted");
  }
  render() {
    return (
      <div>
        <label>Input Data</label>
        <form className="product__form" onSubmit={this.handleSubmit}>
          <label>Data Field:</label>
          <br />
          <input
            type="text"
            name="type"
            placeholder="Data Type"
            value={this.state.type}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Data Name"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="number"
            name="datainfo"
            placeholder="Rating"
            value={this.state.datainfo}
            step="0.0001"
            max="999999999999"
            min="0"
            onChange={this.handleChange}
            required
          />

          <br />
          <button className="submit__button" type="submit">
            Submit Data
          </button>
        </form>
      </div>
    );
  }
}

export default DataCreation;
