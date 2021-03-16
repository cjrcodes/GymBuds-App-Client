import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Budcall from "../components/Budcall";

class Home extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      budcalls: [],
    };
  }
  componentDidMount() {
    axios
      .get("/budcalls")
      .then(res => {
        this.setState({
          budcalls: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let recentBudcallsMarkup = this.state.budcalls ? (
      this.state.budcalls.map((budcall) => <Budcall key={budcall.budcallId} budcall={budcall} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentBudcallsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
