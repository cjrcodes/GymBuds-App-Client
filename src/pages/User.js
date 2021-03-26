import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Budcall from "../components/budcall/Budcall";
import StaticProfile from "../components/profile/StaticProfile";
import Grid from "@material-ui/core/Grid";

import BudcallSkeleton from "../util/BudcallSkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";

import { connect } from "react-redux";

import { getUserData } from "../redux/actions/dataActions";

class User extends Component {
  state = {
    profile: null,
    budcallIdParam: null,
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    const budcallId = this.props.match.params.budcallId;

    if (budcallId) this.setState({ budcallIdParam: budcallId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })

      .catch((err) => console.log(err));
  }

  render() {
    const { budcalls, loading } = this.props.data;
    const { budcallIdParam } = this.state;

    let budcallsMarkup = loading ? (
      <BudcallSkeleton />
    ) : budcalls === null ? (
      <p>No budcalls</p>
    ) : !budcallIdParam ? (
      budcalls.map((budcall) => (
        <Budcall key={budcall.budcallId} budcall={budcall} />
      ))
    ) : (
      budcalls.map((budcall) => {
        if (budcall.budcallId !== budcallIdParam)
          return <Budcall key={budcall.budcallId} budcall={budcall} />;
        else
          return (
            <Budcall key={budcall.budcallId} budcall={budcall} openDialog />
          );
      })
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {budcallsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(User);
