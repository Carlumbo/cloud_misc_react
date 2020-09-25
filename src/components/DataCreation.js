import React, { Component } from "react";
import axios from "axios";

class DataCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type_of: "",
      title: "",
      user_id: "",
      data_point: "",
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
    event.preventDefault();
    axios
      .post(
        "https://msico-rails-backend.herokuapp.com/data",
        {
          type_of: this.state.type_of,
          title: this.state.title,
          user_id: this.props.user.id,
          data_point: this.state.data_point,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.statusText === "Created") {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log("create error", error);
      });

    //alert("data submitted");
  }
  render() {
    console.log(typeof this.props.user.id);
    return (
      <div>
        <label>Input Data</label>
        <form className="product__form" onSubmit={this.handleSubmit}>
          <label>Data Field:</label>
          <br />
          <input
            type="text"
            name="type_of"
            placeholder="Data Type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Data Name"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            name="data_point"
            placeholder="Data point"
            value={this.state.data_point}
            step="0.0001"
            max="999999999999"
            min="0"
            onChange={this.handleChange}
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
