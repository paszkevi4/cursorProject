import React, { useEffect, useState } from "react";

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
  Snackbar,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

  const addEditCategoryHandler = () => {
    if (
      name.length >= 3 &&
      name &&
      icon !== "object" &&
      icon &&
      date.length === 10
    ) {
      updateCategory({
        name: name,
        description: description,
        date: new Date(date),
        icon: icons.indexOf(icon),
      });
      handleClose();
      resetInputs();
      handleClickSuccess();
    }
  };

  const handleCloseDialog = (e) => {
    if (e.target.innerText === "ADD") {
      addEditCategoryHandler();
    } else if (e.target.innerText === "CANCEL") {
      handleClose();
      resetInputs();
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "nameInput") {
      setName(event.target.value);
      if (event.keyCode === 13) {
        addEditCategoryHandler();
      }
    } else if (event.target.id === "descriptionInput") {
      setDescription(event.target.value);
      if (event.keyCode === 13) {
        addEditCategoryHandler();
      }
    } else if (event.target.id === "datePicker") {
      setDate(event.target.value);
    } else if (typeof event.target.value === "object") {
      setIcon(event.target.value);
    }
  };
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
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
          <div className={classes.pickersBlock}>
          <TextField
              className={classes.datePicker}
              margin="dense"
              id="datePicker"
              label="Current date*"
              type="date"
              fullWidth
              onChange={handleChange}
              value={date}
              error={date.length !== 10 ? true : false}
            />
            <TextField
              autoFocus
              className={classes.iconPicker}
              id="selectIcon"
              select
              margin="dense"
              label="Select category icon*"
              value={icon}
              onChange={handleChange}
              error={typeof icon === "string" ? true : false}
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
            
          </div>
          <div>
            <TextField
              margin="dense"
              id="nameInput"
              label="Category name*"
              type="text"
              fullWidth
              onChange={handleChange}
              onKeyUp={handleChange}
              value={name}
              error={name.length < 3 ? true : false}
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
              onKeyUp={handleChange}
              value={description}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSuccess}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Added successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddCategory;
