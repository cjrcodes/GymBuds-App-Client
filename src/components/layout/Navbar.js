import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostBudcall from "../budcall/PostBudcall";
import Notifications from "./Notifications";

//Material UI Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icons
import HomeIcon from "@material-ui/icons/Home";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar className = 'app-bar'>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostBudcall />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login" className="nav-button">
                Login
              </Button>
              
              <Button color="inherit" component={Link} to="/signup"  className="nav-button">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
