import React from 'react';
import HomeTable from './HomeTable';
import useSortTableData from "./sortTable";
// import HomeModal from "./HomeModal";
import AddCharges from "./AddCharges";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
// import HomeSelect from './HomeSelect';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: 'lightcyan',
  },
  addButton: {
    display: 'flex',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 300,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  homeSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  homeMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    height: '40px',
  },
  homeMenuTitle: {
    marginRight: '20px',
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
//---------------------
  // const selectVal = {
  //   "TODAY": Date.now,
  //   "THIS_WEEK": 6,
  //   "THIS_MONTH": 30,
  //   "THIS_YEAR": 256
  // }
const  handlePeriodChange = (selectVal) => {
  // handlePeriodChange(selectVal){
    this.props.handlePeriodChange(selectVal);
    if (selectVal === Date.now) {
      console.log(selectVal.filter(this.props.date));
      return selectVal.filter()
    }
  }
//------------------------
  const { items,  requestSort, sortConfig } = useSortTableData(props.charges, props.categories);
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
          <h3 className={classes.homeMenuTitle}>My Charges</h3>
          {/*<HomeSelect updateCategory={props.createChargeCategory}/>*/}

          <select onChange={(val) => handlePeriodChange(val.target.value)}
                  className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <option value="TODAY">Today</option>
            <option value="THIS_WEEK">This Week</option>
            <option value="THIS_MONTH">This Month</option>
            <option value="THIS_YEAR">This Year</option>
            <option selected value="FULL_PERIOD">Full period</option>
          </select>
        </div>
        <Button
          className={classes.addButton}
          type="button"
          onClick={handleOpen}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}>
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
        <Table className={classes.table} aria-label="Table of Incomes">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={"table-direct"}>
                <button
                  type="button"
                  onClick={() => requestSort('category')}
                  className={getClassNamesFor('category')}> Category
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button
                    type="button"
                    onClick={() => requestSort('description')}
                    className={getClassNamesFor('description')}> Description
                </button>
              </TableCell>
              <TableCell className={"table-direct"}>
                <button
                    type="button"
                    onClick={() => requestSort('date')}
                    className={getClassNamesFor('date')}> Date
                </button>
               </TableCell>
              <TableCell className={"table-direct"}>
                <button
                    type="button"
                    onClick={() => requestSort('money')}
                    className={getClassNamesFor('money')}> Money
                </button>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...items.map((el, i) => (
                <HomeTable
                  category={el.category}
                  icon={props.categories[el.category].icon}
                  name={props.categories[el.category].name}
                  description={el.description}
                  date={el.date.toLocaleDateString()}
                  money={el.money}
                  key={el.name}
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
}

export default Charges;
