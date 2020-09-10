import React, { useState } from "react";

import AddCategory from "./AddCategory";
import Category from "./Category";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "lightcyan",
  },
  addButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "20px",
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
      <div className={classes.addButtonWrapper}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add more
        </Button>
      </div>
      <AddCategory
        open={open}
        handleClose={handleClose}
        createCategory={props.createChargeCategory}
        icons={props.icons}
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
