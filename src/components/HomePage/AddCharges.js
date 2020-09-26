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
  nameSelect: {
    color: "grey",
  },
  namePicker: {
    color: "grey",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "400px",
    padding: "50px",
  },
});

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
  // const values = { currentDate: today.toLocaleDateString()};

  const [name, setName] = useState(`${currentTable.currentName}`);
  const [category, setCategory] = useState(currentTable.currentCategory);
  const [description, setDescription] = useState(currentTable.currentDescription);
  const [date, setDate] = useState(
    currentTable.currentDate ? currentTable.currentDate : values.currentDate
  );
  const [money, setMoney] = useState(currentTable.currentMoney);

  const resetInputs = () => {
		setName("");
    setCategory("");
    setDescription("");
    setDate(values.currentDate);
    setMoney("");
  };

  const handleCloseDialog = (e) => {
    if (e.target.innerText === "ADD") {
      // const gap = total - +money  ;
      if (category >= 0 && money ) {
        // if (gap <= 0) {
        //   const isSure = window.confirm("Are you sure?");
        //   if (isSure) {
            updateCharge({
              name: chargeCategories[category].name,
              icon: chargeCategories[category].icon,
              category: category,
              description: description,
              date: new Date(date),
              money: +money,
            });
            handleClose();
            resetInputs();
          // }
          // return null;
        // } else {
        //   updateCharge({
        //     name: chargeCategories[category].name,
        //     icon: chargeCategories[category].icon,
        //     category: category,
        //     description: description,
        //     date: new Date(date),
        //     money: +money,
        //   });
        //   handleClose();
        //   resetInputs();
        // }
      // }
    } else if (e.target.innerText === "CANCEL") {
      handleClose();
      resetInputs();
    }
    }
  };

  const handleChange = (event) => {
    if (typeof event.target.value === "number") {
			setCategory(event.target.value);
		}else if (event.target.id === "selectName") {
				setName(event.target.value);
    } else if (event.target.id === "descriptionInput") {
      setDescription(event.target.value);
    } else if (event.target.id === "datePicker") {
      setDate(event.target.value);
    } else if (event.target.id === "moneyInput") {
      setMoney(event.target.value);
    }
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
        <DialogContent className={classes.dialogWindow}>
          <div>
            <TextField
              id="selectName"
              select
              margin="dense"
              label="Category name (required)"
							selected={name}
              value={category}
              onChange={handleChange}
              fullWidth
            >
              {[
                ...chargeCategories.map((el, i) => (
                  <MenuItem key={i} value={i} className={classes.nameSelect}>
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
              value={description}
            />
          </div>
          <div>
            <TextField
              className={classes.moneyInput}
              margin="dense"
              id="moneyInput"
              label="Current money (required)"
              input
              value={money}
              type="number"
              fullWidth
              onChange={handleChange}
            />
          </div>
          <div className={classes.pickerBlock}>
            <TextField
              className={classes.datePicker}
              margin="dense"
              id="datePicker"
              // label="Current date"
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

export default AddCharges;
