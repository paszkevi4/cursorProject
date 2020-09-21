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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "lightcyan",
    fontWeight: "700",
  },
  addButton: {
    display: "flex",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  homeSelect: {
    display: "flex",
    alignItems: "center",
  },
  homeMenu: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    height: "40px",
  },
  homeMenuTitle: {
    marginRight: "20px",
  },
}));

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

  const { items, requestSort, sortConfig } = useSortTableData(
    props.incomes,
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
          {/*  <HomeSelect />*/}
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
      />
      <TableContainer component={Paper}>
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
