import React, { useState } from 'react';

import AddCharges from './AddCharges';

import { makeStyles } from '@material-ui/core/styles';
import {Button,Menu,MenuItem,TableCell,TableRow} from '@material-ui/core/';
import { CategoryStyles } from '../Styles';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles(CategoryStyles);

const HomeTable = ({
  icon = <Block />,
  name = 'deleted category',
  description,
  date,
  money,
  deleteMoney,
  updateCharge,
  charges,
  chargeCategories,
  avatar,
  category,
  total,
  totalIncome,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const propsDate = new Date(date?.seconds * 1000);

  const fullDate = {
    year: propsDate.getFullYear(),
    month:
      propsDate.getMonth() + 1 < 10 ? `0${propsDate.getMonth() + 1}` : propsDate.getMonth() + 1,
    day: propsDate.getDate() < 10 ? `0${propsDate.getDate()}` : propsDate.getDate(),
  };

  const [currentTable, setCurrentTable] = useState({
    currentName: name,
    currentDescription: description,
    currentIcon: icon,
    currentMoney: money,
    currentDate: null,
    currentCategory: category,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.target.closest('th'));
  };

  const handleActionClose = (e) => {
    if (e.target.innerText === 'Delete') {
      deleteMoney();
    } else if (e.target.innerText === 'Edit') {
      setOpen(true);
      setCurrentTable({
        currentName: name,
        currentCategory: category,
        currentDescription: description,
        currentIcon: icon,
        currentMoney: money,
        currentDate: `${fullDate.year}-${fullDate.month}-${fullDate.day}`,
      });
    }
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div className={classes.categoryNameBlock}>
          <div className={classes.categoryIcon}>{icon}</div>
          <div className={classes.categoryName}>{name}</div>
        </div>
      </TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{`${fullDate.day}.${fullDate.month}.${fullDate.year}`}</TableCell>
      <TableCell>{money}</TableCell>
      <TableCell>
        <img src={`${avatar}`} alt="avatar" className={'avatar'} />
      </TableCell>
      <TableCell>
        <Button
          aria-controls="home-menu"
          aria-haspopup="true"
          onClick={handleActionClick}
          size="small">
          <MoreVertIcon color="action" />
        </Button>
        <Menu
          id="home-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleActionClose}>
          <MenuItem onClick={handleActionClose}>Edit</MenuItem>
          <MenuItem onClick={handleActionClose}>Delete</MenuItem>
          {open && (
            <AddCharges
              open={open}
              handleClose={handleClose}
              currentTable={currentTable}
              updateCharge={updateCharge}
              charges={charges}
              chargeCategories={chargeCategories}
              total={total}
              totalIncome={totalIncome}
            />
          )}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default HomeTable;
