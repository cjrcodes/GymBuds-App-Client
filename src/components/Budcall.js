import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import DeleteBudcall from "./DeleteBudcall";

//Material UI Components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Icons
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//Redux
import { connect } from "react-redux";
import { likeBudcall, unlikeBudcall } from "../redux/actions/dataActions";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },

  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};
class Budcall extends Component {
  likedBudcall = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.budcallId === this.props.budcall.budcallId
      )
    )
      return true;
    else return false;
  };

  likeBudcall = () => {
    this.props.likeBudcall(this.props.budcall.budcallId);
  };

  unlikeBudcall = () => {
    this.props.unlikeBudcall(this.props.budcall.budcallId);
  };
  render() {
    dayjs.extend(relativeTime);

    const {
      classes,
      budcall: {
        body,
        createdAt,
        userImage,
        userHandle,
        budcallId,
        likeCount,
        commentCount,
      },

      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const likeButton = !authenticated ? (
      <MyButton tip="Like">
        <Link to="/login">
          <FavoriteBorder color="primary" />
        </Link>
      </MyButton>
    ) : this.likedBudcall() ? (
      <MyButton tip="Undo like" onClick={this.unlikeBudcall}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeBudcall}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteBudcall budcallId={budcallId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2">{dayjs(createdAt).fromNow()}</Typography>
          <Typography variant="body1">{body}</Typography>
          {likeButton}
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
        </CardContent>
      </Card>
    );
  }
}

Budcall.propTypes = {
  likeBudcall: PropTypes.func.isRequired,
  unlikeBudcall: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  budcall: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeBudcall,
  unlikeBudcall,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Budcall));
