import React, { useEffect, useState } from 'react';

import HomeTable from './HomeTable';
import AddCharges from './AddCharges';
import { createCharge, updateCharge, deleteCharge } from '../../store/firebase/chargesFB';


// Styles
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { TableStyles } from '../Styles';

const useStyles = makeStyles(TableStyles);

const Charges = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [filtered, setFiltered] = useState(props.charges);
  const [filteredBy, setFilteredBy] = useState('FULL_PERIOD');

  window.filteredBy = filteredBy;

  useEffect(() => {
    handlePeriodChange(filteredBy);
  }, [props.charges, filteredBy]);

  const handlePeriodChange = (filteredBy = 'FULL_PERIOD') => {
    if (+filteredBy === 1 || +filteredBy === 7 || +filteredBy === 30) {
      let milliseconds = +filteredBy * 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      let time = currentDate.setTime(currentDate.getTime() - milliseconds);
      return setFiltered(
        props.charges.filter((arr) => {
          return arr.date.seconds * 1000 > time;
        }),
      );
    } else if (filteredBy === 'FULL_PERIOD') {
      return setFiltered([...props.charges]);
    }
  };

  const [wasSortedByCategory, setWasSortedByCategory] = useState(false);
  const [wasSortedByDate, setWasSortedByDate] = useState(false);
  const [wasSortedByDescription, setWasSortedByDescription] = useState(false);
  const [wasSortedByMoney, setWasSortedByMoney] = useState(false);

  const sortChargesFunc = (e) => {
    if (e.target.innerText === 'Category') {
      props.sortCharges('Category', wasSortedByCategory, filtered);
      setWasSortedByCategory(!wasSortedByCategory);
    } else if (e.target.innerText === 'Date') {
      props.sortCharges('Date', wasSortedByDate, filtered);
      setWasSortedByDate(!wasSortedByDate);
    } else if (e.target.innerText === 'Description') {
      props.sortCharges('Description', wasSortedByDescription, filtered);
      setWasSortedByDescription(!wasSortedByDescription);
    } else if (e.target.innerText === 'Money') {
      props.sortCharges('Money', wasSortedByMoney, filtered);
      setWasSortedByMoney(!wasSortedByMoney);
    }
  };

  return (
    <div>
      <div className={classes.homeMenu}>
        <div className={classes.homeSelect}>
          <h3 className={classes.homeMenuTitle}>My Charges</h3>
          <select
            id="datePeriod"
            name="datePeriod"
            onChange={(event) => setFilteredBy(event.target.value)}
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
            defaultValue={'FULL_PERIOD'}>
            <option value="1">Today</option>
            <option value="7">This Week</option>
            <option value="30">This Month</option>
            <option value="FULL_PERIOD">Full period</option>
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
        updateCharge={createCharge}
        charges={props.charges}
        chargeCategories={props.categories}
        total={props.total}
        totalIncome={props.totalIncome}
      />
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="Table of Charges">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={'table-direct'}>
                <button type="button" onClick={sortChargesFunc}>
                  {' '}
                  Category
                </button>
              </TableCell>
              <TableCell className={'table-direct'}>
                <button type="button" onClick={sortChargesFunc}>
                  {' '}
                  Description
                </button>
              </TableCell>
              <TableCell className={'table-direct'}>
                <button type="button" onClick={sortChargesFunc}>
                  {' '}
                  Date
                </button>
              </TableCell>
              <TableCell className={'table-direct'}>
                <button type="button" onClick={sortChargesFunc}>
                  {' '}
                  Money
                </button>
              </TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Action</TableCell>
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
                    deleteCharge(el.docId);
                  }}
                  updateCharge={(charge) => {
                    updateCharge(el.docId, charge);
                  }}
                  charges={props.charges}
                  chargeCategories={props.categories}
                  total={props.total}
                  totalIncome={props.totalIncome}
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
