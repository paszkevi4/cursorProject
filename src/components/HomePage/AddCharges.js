import React, { useState } from "react";
import { connect } from "react-redux";
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

import { ModalStyles } from "../Styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(ModalStyles);

const AddCharges = ({
  open,
  handleClose,
  createCharge,
  currentTable = {
    currentCategory: "",
    currentName: "",
    currentDescription: "",
    currentDate: "",
    currentMoney: "",
    currentIcon: "",
  },
  updateCharge,
  charges,
  chargeCategories,
  total,
  totalIncome,
  // handlePeriodChange,
  ...props
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

  const [name, setName] = useState(`${currentTable.currentName}`);
  const [category, setCategory] = useState(currentTable.currentCategory);
  const [description, setDescription] = useState(
    currentTable.currentDescription
  );
  const [date, setDate] = useState(
    currentTable.currentDate ? currentTable.currentDate : values.currentDate
  );
  const [money, setMoney] = useState(currentTable.currentMoney);
  const [openAlert, setOpenAlert] = useState(false);

  const resetInputs = () => {
    setName("");
    setCategory("");
    setDescription("");
    setDate(values.currentDate);
    setMoney("");
  };

  const addEditItem = () => {
    const gap = total - +money;
    const gapPercent = ((total - +money) / totalIncome) * 100;
    if (category && money > 0 && money && date.length === 10) {
      if (
        props.showWarning &&
        (gap <= props.moneyLimit || gapPercent < props.percentLimit)
      ) {
        const isSure = window.confirm("Are you sure?");
        if (isSure) {
          const temp = {
            category: category,
            description: description,
            date: new Date(date),
            money: +money,
          };
          updateCharge(temp);
          handleClose();
          resetInputs();
          handleClickAlert();
          // handlePeriodChange();
        }
        return null;
      } else {
        updateCharge({
          //   name: chargeCategories[category].name,
          //   icon: chargeCategories[category].icon,
          category: category,
          description: description,
          date: new Date(date),
          money: +money,
        });
        handleClose();
        resetInputs();
        handleClickAlert();
        // handlePeriodChange();
      }
    }
    // handlePeriodChange();
  };

  const handleCloseDialog = (e) => {
    if (e.target.innerText === "ADD") {
      addEditItem();
    } else if (e.target.innerText === "CANCEL") {
      handleClose();
      resetInputs();
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "selectName") {
      setName(event.target.value);
    } else if (event.target.id === "descriptionInput") {
      setDescription(event.target.value);
      if (event.keyCode === 13) {
        addEditItem();
      }
    } else if (event.target.id === "datePicker") {
      setDate(event.target.value);
      if (event.keyCode === 13) {
        addEditItem();
      }
    } else if (event.target.id === "moneyInput") {
      setMoney(event.target.value);
      if (event.keyCode === 13) {
        addEditItem();
      }
    } else {
      setCategory(event.target.value);
    }
  };

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-charge-title"
        aria-describedby="add-charge-description"
      >
        <DialogTitle id="add-charge-title">{"ADD NEW ITEM"}</DialogTitle>
        <DialogContent className={classes.window}>
          <div className={classes.pickerBlock}>
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
          </div>
          <div>
            <TextField
              autoFocus
              id="selectName"
              select
              margin="dense"
              label="Category name*"
              selected={name}
              value={category}
              onChange={handleChange}
              error={category.length < 1 ? true : false}
              fullWidth
            >
              {[
                chargeCategories.map((el, i) => (
                  <MenuItem
                    key={i}
                    value={el.docId}
                    className={classes.nameSelect}
                  >
                    {el.name}
                  </MenuItem>
                )),
              ]}
            </TextField>
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
          <div>
            <TextField
              className={classes.moneyInput}
              margin="dense"
              id="moneyInput"
              label="Current money*"
              input
              value={money}
              type="number"
              fullWidth
              onChange={handleChange}
              onKeyUp={handleChange}
              error={money <= 0 ? true : false}
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
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Added successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    showWarning: state.settings.showWarning,
    moneyLimit: state.settings.moneyLimit,
    percentLimit: state.settings.percentLimit,
  };
};

export default connect(mapStateToProps, null)(AddCharges);
