import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteBudcall from "./DeleteBudcall";
import BudcallDialog from "./BudcallDialog";
import LikeButton from "./LikeButton";

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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//Redux
import { connect } from "react-redux";
import { likeBudcall, unlikeBudcall } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.budcall,
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
});
class Budcall extends Component {
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
          <LikeButton budcallId={budcallId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="Comment">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <BudcallDialog
            budcallId={budcallId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
          
        </CardContent>
      </Card>
    );
  }
}

Budcall.propTypes = {
  user: PropTypes.object.isRequired,
  budcall: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Budcall));
