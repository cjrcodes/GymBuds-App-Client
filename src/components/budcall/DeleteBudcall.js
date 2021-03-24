import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import withStyles from "@material-ui/core/styles/withStyles";

//Material UI Imports
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import { connect } from "react-redux";
import { deleteBudcall } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.deleteBudcall,
});
class DeleteBudcall extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  deleteBudcall = () => {
    this.props.deleteBudcall(this.props.budcallId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Delete Budcall"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this budcall?
          </DialogTitle>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteBudcall} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteBudcall.propTypes = {
  deleteBudcall: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  budcallId: PropTypes.string.isRequired,
};

export default connect(null, { deleteBudcall })(
  withStyles(styles)(DeleteBudcall)
);
