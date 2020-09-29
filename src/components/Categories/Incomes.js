import React, { useState } from 'react';

import AddCategory from './AddCategory';
import Category from './Category';

import {
  createIncomeCategory,
  updateIncomeCategory,
  deleteIncomeCategory,
} from "../../redux/firebase/incomeCategoriesFB";

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
import { makeStyles } from "@material-ui/core/styles";
import { TableStyles } from "../Styles";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles(TableStyles);

const Incomes = ({ props }) => {
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
          onClick={handleClickOpen}>
          Add more
        </Button>
      </div>
      <AddCategory
        open={open}
        handleClose={handleClose}
        updateCategory={createIncomeCategory}
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
              ...props.incomeCategories.map((el, i) => (
                <Category
                  name={el.name}
                  description={el.description}
                  date={el.date}
                  icon={el.icon}
                  key={i}
                  deleteCategory={() => {
                    deleteIncomeCategory(el.docId);
                  }}
                  updateCategory={(category) => {
                    updateIncomeCategory(el.docId, category);
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

export default Incomes;
