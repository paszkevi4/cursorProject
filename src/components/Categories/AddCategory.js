import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  dialogWindow: {
    minWidth: "350px",
  },
});

const AddCategory = ({ open, handleClose, createChargeCategory }) => {
  const classes = useStyles();
  const today = new Date();

  const values = {
    currentDate: `${today.getFullYear()}-${
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1
    }-${today.getDate()}`,
  };

  const [icon, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-category-title"
        aria-describedby="add-category-description"
      >
        <DialogTitle id="add-category-title">{"ADD NEW CATEGORY"}</DialogTitle>
        <DialogContent className={classes.dialogWindow}>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Category name"
              type="text"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="select-category-icon"
              select
              margin="dense"
              label="Select category icon"
              value={icon}
              onChange={handleChange}
              //   helperText="Select category icon"
              fullWidth
            >
              {/* {icons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
          </div>
          <div>
            <TextField
              margin="dense"
              id="description"
              label="Category description"
              type="text"
              fullWidth
            />
          </div>
          <div>
            <TextField
              margin="dense"
              id="description"
              label="Current date"
              type="date"
              defaultValue={values.currentDate}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategory;
