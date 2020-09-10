import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  dialogWindow: {
    minWidth: "350px",
  },
  iconSelect: {
    color: "grey",
  },
  pickersBlock: {},
  iconPicker: {
    color: "grey",
  },
});

const AddCategory = ({ open, handleClose, createCategory, icons }) => {
  const classes = useStyles();
  const today = new Date();

  const values = {
    currentDate: `${today.getFullYear()}-${
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1
    }-${today.getDate()}`,
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(values.currentDate);
  const [icon, setIcon] = useState("");

  const handleCloseDialog = (e) => {
    console.log(e.target);
    if (e.target.innerText === "ADD") {
      if(name && icon){
        createCategory({name: name, description: description, date: date, icon: icons[icon]})
        handleClose();
      }
      console.log("added");
    } else if (e.target.innerText === "CANCEL") {
      setName("");
      setDescription("");
      setDate(values.currentDate);
      setIcon("");
      console.log("canceled");
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "nameInput") {
      setName(event.target.value);
    } else if (event.target.id === "descriptionInput") {
      setDescription(event.target.value);
    } else if (typeof event.target.value === "number") {
      setIcon(event.target.value);
    } else if (event.target.id === "datePicker") {
      setDate(event.target.value);
    }
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
              id="nameInput"
              label="Category name"
              type="text"
              fullWidth
              onChange={handleChange}
              value={name}
            />
          </div>

          <div>
            <TextField
              margin="dense"
              id="descriptionInput"
              label="Category description"
              type="text"
              fullWidth
              onChange={handleChange}
              value={description}
            />
          </div>
          <div className={classes.pickersBlock}>
            <TextField
              className={classes.iconPicker}
              id="selectIcon"
              select
              margin="dense"
              label="Select category icon"
              value={icon}
              onChange={handleChange}
              //   helperText="Select category icon"
              fullWidth
            >
              {[
                ...icons.map((el, i) => (
                  <MenuItem key={i} value={i} className={classes.iconSelect}>
                    {el}
                  </MenuItem>
                )),
              ]}
            </TextField>
            <TextField
              className={classes.datePicker}
              margin="dense"
              id="datePicker"
              label="Current date"
              type="date"
              fullWidth
              onChange={handleChange}
              value={date}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategory;
