import React, { Component } from "react";
import axios from "axios";

class DataPoints extends Component {
  state = {
    dataPoints: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/data").then((res) => {
      //console.log(res);
      const dataPoints = res.data;
      this.setState({ dataPoints });
      // console.log(this.state);
    });
  }

  render() {
    //console.log(this.props.user);
    return (
      <div>
        <ul>
          {this.props.user.map((data) => (
            <li>{data.data_point}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataPoints;
