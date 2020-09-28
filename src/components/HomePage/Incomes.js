import React from "react";
import HomeTable from "./HomeTable";
import AddCharges from "./AddCharges";
//import HomeSelect from './HomeSelect';
import useSortTableData from "./sortTable";
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
import { TableStyles } from "../Styles";

const useStyles = makeStyles(TableStyles);

const Incomes = (props) => {
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const [filtered, setFiltered] = React.useState(props.incomes); //items
  const handlePeriodChange = (selectVal = 'FULL_PERIOD') => {
    if (+selectVal === 7 || +selectVal === 30) {
      let milliseconds = +selectVal * 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      let time = currentDate.setTime(currentDate.getTime() - milliseconds);
      return setFiltered([
        ...props.incomes.filter((arr) => {
          // filtered:  ...items
          console.log(arr.date.getTime() > time);
          return arr.date.getTime() > time;
        }),
      ]);
    } else if (selectVal === 'FULL_PERIOD') {
      return setFiltered([...props.incomes]); //items
    }
  };

  const { items, requestSort, sortConfig } = useSortTableData(
    filtered, //props.incomes,
    props.categories
  );
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div>
      <div className={classes.homeMenu}>
        <div className={classes.homeSelect}>
          <h3 className={classes.homeMenuTitle}>My Incomes</h3>
          <select
              id="datePeriod"
              name="datePeriod"
              onChange={(event) => handlePeriodChange(event.target.value)}
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              // selected={"FULL_PERIOD"}
              defaultValue={'FULL_PERIOD'}
              // value={filter ? filter.value : "FULL_PERIOD"}
          >
            <option value="7">This Week</option>
            <option value="30">This Month</option>
            <option value="FULL_PERIOD">Full period</option>
          </select>
          {/*<FilterDate filtered={items} />*/}

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
        updateCharge={props.createIncome}
        charges={props.incomes}
        chargeCategories={props.categories}
        handlePeriodChange={handlePeriodChange}
      />
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="Table of Incomes">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={"table-direct"}>
                <button
                  type="button"
                  onClick={() => requestSort("category")}
                  className={getClassNamesFor("category")}
                >
                  {" "}
                  Category
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button
                  type="button"
                  onClick={() => requestSort("description")}
                  className={getClassNamesFor("description")}
                >
                  {" "}
                  Description
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button
                  type="button"
                  onClick={() => requestSort("date")}
                  className={getClassNamesFor("date")}
                >
                  Date
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button
                  type="button"
                  onClick={() => requestSort("money")}
                  className={getClassNamesFor("money")}
                >
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
              ...items.map((el, i) => (
                <HomeTable
                  category={el.category}
                  name={props.categories[el.category].name}
                  icon={props.categories[el.category].icon}
                  description={el.description}
                  date={el.date}
                  money={el.money}
                  key={i} //el.name
                  avatar={props.avatar}
                  deleteMoney={() => {
                    props.deleteMoney(i);
                  }}
                  updateCharge={(income) => {
                    props.updateIncome(i, income);
                  }}
                  charges={props.incomes}
                  chargeCategories={props.categories}
                  handlePeriodChange={handlePeriodChange}
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
