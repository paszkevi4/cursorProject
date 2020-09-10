import React, { useState } from "react";

import AddCategory from "./AddCategory";
import Category from "./Category";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import { AccountBalance, AccountBalanceWallet, AllInbox } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "lightcyan",
  },
  addButton: {
    float: "right",
  },
});

const Charges = ({ props }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.addButton}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add more
      </Button>
      <AddCategory
        open={open}
        handleClose={handleClose}
        createChargeCategory={props.createChargeCategory}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ...props.chargeCategories.map((el, i) => (
                <Category
                  name={el.name}
                  description={el.description}
                  date={el.date.toString()}
                  icon={el.icon}
                  //icon={Object.values(props.icons)[el.icon]}
                  key={el.name}
                />
              )),
            ]}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Charges;
