import React, { useState } from "react";

import { ModalStyles } from "../Styles";

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

const useStyles = makeStyles(ModalStyles);

const AddCategory = ({
  open,
  handleClose,
  currentCategory = {
    currentName: "",
    currentDescription: "",
    currentDate: "",
    currentIcon: "",
  },
  updateCategory,
  icons,
}) => {
  const classes = useStyles();
  const today = new Date();

  const values = {
    currentDate: `${today.getFullYear()}-${
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1
    }-${today.getDate()}`,
  };

  const [name, setName] = useState(`${currentCategory.currentName}`);
  const [description, setDescription] = useState(
    currentCategory.currentDescription
  );
  const [date, setDate] = useState(
    currentCategory.currentDate
      ? currentCategory.currentDate
      : values.currentDate
  );
  const [icon, setIcon] = useState(currentCategory.currentIcon);

  const resetInputs = () => {
    setName("");
    setDescription("");
    setDate(values.currentDate);
    setIcon("");
  };

  const handleCloseDialog = (e) => {
    if (e.target.innerText === "ADD") {
      if (name && icon !== "object" && icon) {
        updateCategory({
          name: name,
          description: description,
          date: new Date(date),
          icon: icons.indexOf(icon),
        });
        handleClose();
        resetInputs();
      }
    } else if (e.target.innerText === "CANCEL") {
      handleClose();
      resetInputs();
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "nameInput") {
      setName(event.target.value);
    } else if (event.target.id === "descriptionInput") {
      setDescription(event.target.value);
    } else if (event.target.id === "datePicker") {
      setDate(event.target.value);
    } else if (typeof event.target.value === "object") {
      setIcon(event.target.value);
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
        <DialogContent className={classes.window}>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="nameInput"
              label="Category name (required)"
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
              label="Select category icon (required)"
              value={icon}
              onChange={handleChange}
              //   helperText="Select category icon"
              fullWidth
            >
              {[
                ...icons.map((el, i) => (
                  <MenuItem key={i} value={el} className={classes.iconSelect}>
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
