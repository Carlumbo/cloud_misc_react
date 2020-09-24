import React, { Component } from "react";
import DataCreation from "../components/DataCreation";

class DataList extends Component {
  render() {
    let user = this.props.user;
    //console.log(user);
    if (user.loggedInStatus === "LOGGED_IN") {
      return (
        <div>
          <DataCreation user={this.props.user.user} />
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
