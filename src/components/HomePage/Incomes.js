import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchIncomesAC } from "../../store/redux/incomesReducer";
import {
  createIncome,
  updateIncome,
  deleteIncome,
} from "../../store/firebase/incomeFB";

import HomeTable from "./HomeTable";
import AddCharges from "./AddCharges";

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
import { TableStyles } from "../Styles";

const useStyles = makeStyles(TableStyles);

const Incomes = (props) => {
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [wasSortedByCategory, setWasSortedByCategory] = useState(false);
  const [wasSortedByDate, setWasSortedByDate] = useState(false);
  const [wasSortedByDescription, setWasSortedByDescription] = useState(false);
  const [wasSortedByMoney, setWasSortedByMoney] = useState(false);

  const sortIncomesFunc = (e) => {
    if (e.target.innerText === "Category") {
      props.sortIncomes("Category", wasSortedByCategory);
      setWasSortedByCategory(!wasSortedByCategory);
    } else if (e.target.innerText === "Date") {
      props.sortIncomes("Date", wasSortedByDate);
      setWasSortedByDate(!wasSortedByDate);
    } else if (e.target.innerText === "Description") {
      props.sortIncomes("Description", wasSortedByDescription);
      setWasSortedByDescription(!wasSortedByDescription);
    } else if (e.target.innerText === "Money") {
      props.sortIncomes("Money", wasSortedByMoney);
      setWasSortedByMoney(!wasSortedByMoney);
    }
  };

  const [filtered, setFiltered] = React.useState(props.incomes); //items
  const [filteredBy, setFilteredBy] = React.useState("FULL_PERIOD");

  useEffect(() => {
    handlePeriodChange(filteredBy);
  }, [props.incomes, filteredBy]);

  const handlePeriodChange = (filteredBy = "FULL_PERIOD") => {
    if (+filteredBy === 7 || +filteredBy === 30) {
      let milliseconds = +filteredBy * 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      let time = currentDate.setTime(currentDate.getTime() - milliseconds);

      setFiltered(
        props.incomes.filter((arr) => {
          return arr.date.seconds * 1000 > time;
        })
      );
    } else if (filteredBy === "FULL_PERIOD") {
      return setFiltered(props.incomes); //items
    }
  };
  return (
    <div>
      <div className={classes.homeMenu}>
        <div className={classes.homeSelect}>
          <h3 className={classes.homeMenuTitle}>My Incomes</h3>
          <select
            id="datePeriod"
            name="datePeriod"
            onChange={(event) => setFilteredBy(event.target.value)}
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
            defaultValue={"FULL_PERIOD"}
          >
            <option value="7">This Week</option>
            <option value="30">This Month</option>
            <option value="FULL_PERIOD">Full period</option>
          </select>
        </div>
        <Button
          className={classes.addButton}
          type="button"
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add more
        </Button>
      </div>
      <AddCharges
        open={open}
        handleClose={handleClose}
        updateCharge={createIncome}
        charges={props.incomes}
        chargeCategories={props.categories}
      />
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="Table of Incomes">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={"table-direct"}>
                <button type="button" onClick={sortIncomesFunc}>
                  {" "}
                  Category
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button type="button" onClick={sortIncomesFunc}>
                  {" "}
                  Description
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button type="button" onClick={sortIncomesFunc}>
                  Date
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button type="button" onClick={sortIncomesFunc}>
                  {" "}
                  Money
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>Avatar</TableCell>
              <TableCell className={"table-direct"}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              filtered.map((el, i) => (
                <HomeTable
                  category={el.category}
                  icon={
                    props.categories.find((innerEl) => {
                      return innerEl.docId === el.category;
                    })?.icon
                  }
                  name={
                    props.categories.find((innerEl) => {
                      return innerEl.docId === el.category;
                    })?.name
                  }
                  description={el.description}
                  date={el.date}
                  money={el.money}
                  key={i}
                  avatar={props.avatar}
                  deleteMoney={() => {
                    deleteIncome(el.docId);
                  }}
                  updateCharge={(income) => {
                    updateIncome(el.docId, income);
                  }}
                  charges={props.incomes}
                  chargeCategories={props.categories}
                />
              )),
            ]}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect(null, { fetchIncomesAC })(Incomes);
