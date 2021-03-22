import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Budcall from "../components/Budcall";
import Profile from "../components/Profile";

import { connect } from "react-redux";
import { getBudcalls } from "../redux/actions/dataActions";

class Home extends Component {
  componentDidMount() {
    this.props.getBudcalls();
  }

  render() {
    const { budcalls, loading } = this.props.data;
    let recentBudcallsMarkup = !loading ? (
      budcalls.map((budcall) => (
        <Budcall key={budcall.budcallId} budcall={budcall} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentBudcallsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  getBudcalls: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getBudcalls })(Home);
