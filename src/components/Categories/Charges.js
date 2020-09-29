import React, { useState } from "react";

import AddCategory from "./AddCategory";
import Category from "./Category";

import {
  createChargeCategory,
  updateChargeCategory,
  deleteChargeCategory,
} from "../../redux/firebase/chargeCategoriesFB";

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
import { makeStyles } from "@material-ui/core/styles";
import { TableStyles } from "../Styles";

const useStyles = makeStyles(TableStyles);

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
        updateCategory={createChargeCategory}
        icons={props.icons}
      />
      <TableContainer component={Paper} className={classes.tableWrapper}>
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
                  date={el.date}
                  icon={el.icon}
                  key={i}
                  deleteCategory={() => {
                    deleteChargeCategory(el.docId);
                  }}
                  updateCategory={(category) => {
                    updateChargeCategory(el.docId, category);
                  }}
                  icons={props.icons}
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
