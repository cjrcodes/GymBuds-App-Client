import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import { connect } from "react-redux";
import { likeBudcall, unlikeBudcall } from "../../redux/actions/dataActions";

export class LikeButton extends Component {
  likedBudcall = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.budcallId === this.props.budcallId
      )
    )
      return true;
    else return false;
  };

  likeBudcall = () => {
    this.props.likeBudcall(this.props.budcallId);
  };

  unlikeBudcall = () => {
    this.props.unlikeBudcall(this.props.budcallId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedBudcall() ? (
      <MyButton tip="Undo like" onClick={this.unlikeBudcall}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeBudcall}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  budcallId: PropTypes.string.isRequired,
  likeBudcall: PropTypes.func.isRequired,
  unlikeBudcall: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { likeBudcall, unlikeBudcall };

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
