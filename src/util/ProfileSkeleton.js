import React from "react";

import NoImg from "../images/dumbbell.png";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";

import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const styles = (theme) => ({
  ...theme.profileCard,
  ...theme.profileSkeleton,
  
});

const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={NoImg} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle} />
          <hr />
          <div className={classes.fullLine} />
          <div className={classes.fullLine} />
          <hr />
          <LocationOn color="primary" />{" "}
          <span>
            <div className={classes.fullLine} />
          </span>
          <hr />
          <LinkIcon color="primary" /> <div className={classes.fullLine} />
          <hr />
          <CalendarToday color="primary" /> <div className={classes.fullLine} />
        </div>
      </div>
    </Paper>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSkeleton);
