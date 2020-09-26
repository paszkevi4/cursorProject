import React from "react";
import HomeTable from "./HomeTable";
import useSortTableData from "./sortTable";
// import HomeModal from "./HomeModal";
import AddCharges from "./AddCharges";
// import HomeSelect from './HomeSelect';

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
// import FilterDate from "./FilterDate";
// import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "lightcyan",
  },
  addButton: {
    display: "flex",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 300,
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

const Charges = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [filtered, setFiltered] = React.useState(props.charges);//items
  const handlePeriodChange = (selectVal) => {
    if (+selectVal === 7 || +selectVal === 30) {
      let milliseconds = +selectVal * 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      let time = currentDate.setTime(currentDate.getTime() - milliseconds);
      return setFiltered(
          [...props.charges.filter((arr) => {  // filtered:  ...items
            console.log(arr.date.getTime() > time);
            return(arr.date.getTime() > time);
          })]
      )
    }else if(selectVal === "FULL_PERIOD"){
      // console.log([...props.charges]);
      // return([...props.charges]);
      return setFiltered([...props.charges])  //items
    }
  }

  const {items, requestSort, sortConfig} = useSortTableData(
      filtered,  //props.charges
      props.categories
  );
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  // const { itemsFilter, setFilterConfig }  = React.useState([...items]);
  // const [dateFilter, setFilterDate] = React.useState([...items]);


//     // handlePeriodChange(selectVal){
//     // this.handlePeriodChange(selectVal);
//     const setFiltered = filters( filtered);
//     function filters(anArray){
//       let newArr = []
//       for(let i =0; i< anArray.length; i++){
//         if(anArray[i]){
//           newArr.push(anArray[i].date.getTime());
//         }
//       }
//       return (newArr);
//     }
//     if (+selectVal === 7) {
//       // console.log(setFiltered.filter((fil) => {
//       //   return (parseInt(fil) / 2) > 10
//       // }));
//      let mili = +selectVal*24*60*60*1000;
//       let currentDate = new Date();
//       let time = currentDate.setTime(currentDate.getTime()- mili);
//       console.log(new Date(time));
//       // setFiltered.filter((fil) => {
//       //   return((fil) >=(time));
//       // });
//       console.log(setFiltered.filter((fil) => {
//         return((fil) >=(time))}));
//       // console.log(
//       //    (new Date(setFiltered.filter((fil) => ((fil) >=( time)) )).toLocaleDateString()));
//       // console.log(new Date(fil).toLocaleDateString());
//     }else if (+selectVal === 30) {
//       // console.log(setFiltered.filter((fil) => {
//       //   return (parseInt(fil) / 2) > 10
//       // }));
//       let mili = +selectVal*24*60*60*1000;
//       let currentDate = new Date();
//       let time = currentDate.setTime(currentDate.getTime() - mili);
//       // console.log(new Date(time).toLocaleDateString());
//       console.log(new Date(time));
//       console.log(setFiltered.filter((fil) => {
//         return((fil) >=(time))}));
//     }else{
//       console.log(setFiltered);
//       return (setFiltered);
//     }
//   };
  // const day = new Date();
  // const me = new Date(day);
  // me;
  // me.toLocaleDateString()
  return (
    <div>
      <div className={classes.homeMenu}>
        <div className={classes.homeSelect}>
          <h3 className={classes.homeMenuTitle}>My Charges</h3>
          {/*<HomeSelect updateCategory={props.createChargeCategory}/>*/}
          <select
            id="datePeriod" name="datePeriod"
            onChange={event => handlePeriodChange(event.target.value)}
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
            // selected={"FULL_PERIOD"}
            defaultValue={"FULL_PERIOD"}
              // value={filter ? filter.value : "FULL_PERIOD"}
            // value={props.charges}
              >
            <option value="7">This Week</option>
            <option value="30">This Month</option>
            <option value="FULL_PERIOD">Full period</option>
          </select>
          {/*<HomeSelect filtered={items}/>*/}
          {/*<FilterDate filtered={items} />*/}
        </div>
        <Button
          className={classes.addButton}
          type="button"
          onClick={handleOpen}
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
        updateCharge={props.createCharge}
        charges={props.charges}
        chargeCategories={props.categories}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Table of Charges">
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
                  {" "}
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
              <TableCell>Avatar</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ...items.map((el, i) => (  //items
                <HomeTable
                  category={el.category}
                  icon={props.categories[el.category].icon}
                  name={props.categories[el.category].name}
                  description={el.description}
                  date={el.date}
                  money={el.money}
                  key={i}
                  avatar={props.avatar}
                  deleteMoney={() => {
                    props.deleteMoney(i);
                  }}
                  updateCharge={(charge) => {
                    props.updateCharge(i, charge);
                  }}
                  charges={props.charges}
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

export default Charges;
