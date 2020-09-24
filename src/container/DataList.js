import axios from "axios";
import React, { Component } from "react";
import DataCreation from "../components/DataCreation";
import DataPoints from "../components/DataPoints";

class DataList extends Component {
  state = {
    dataPoints: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/data").then((res) => {
      //console.log(res);
      const dataPoints = res.data;
      console.log(this.props);
      //console.log(dataPoints);
      this.setState({ dataPoints });
      // console.log(this.state);
    });
  }
  render() {
    let user = this.props.user;
    //console.log(user);
    if (user.loggedInStatus === "LOGGED_IN") {
      return (
        <div>
          <DataCreation user={this.props.user.user} />
          <DataPoints user={this.state.dataPoints} data={this.handlePageLoad} />
        </div>
      );
    } else {
      return (
        <div>
          <h5>Login to view Data</h5>
        </div>
      );
    }
  }
}

export default DataList;
