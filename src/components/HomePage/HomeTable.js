import React, { useState } from "react";
// import ReactDOM from 'react-dom'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import AddCharges from "./AddCharges";

const useStyles = makeStyles({
  categoryBlock: {
    // display: 'flex',
    alignItems: "center",
  },
  categoryName: {
    display: "flex",
  },
});

const HomeTable = ({
  icon,
  name,
  description,
  date,
  money,
  deleteMoney,
  updateCharge,
  charges,
  chargeCategories,
  avatar,
  category
}) => {
  // let propsDate = new Date(date)
  // console.log(propsDate.getDay());
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const propsDate = new Date(date);

  const fullDate = {
    year: propsDate.getFullYear(),
    month:
      propsDate.getMonth() + 1 < 10
        ? `0${propsDate.getMonth() + 1}`
        : propsDate.getMonth() + 1,
    day:
      propsDate.getDate() < 10
        ? +`0${propsDate.getDate()}`
        : propsDate.getDate(),
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
    console.log(e.target.closest("th"));
  };

  const handleActionClose = (e) => {
    if (e.target.innerText === "Delete") {
      deleteMoney();
    } else if (e.target.innerText === "Edit") {
      setOpen(true);
      setCurrentTable({
        currentName: name,
        currentCategory: category ,
        currentDescription: description,
        currentIcon: icon,
        currentMoney: money,
        currentDate: `${fullDate.year}-${fullDate.month}-${fullDate.day}`,
      });
      console.log(
        name,
        description,
        icon,
        `${fullDate.year}-${fullDate.month}-${fullDate.day}`
      );
    }
    setAnchorEl(null);
  };

  // const handleClick = (e) => {
  // 	setAnchorEl(e.currentTarget);
  // 	console.log(e.target.closest('th'))
  // };

  // const propsDate = new Date(date);
  //
  // const fullDate = {
  // 	year: propsDate.getFullYear(),
  // 	month:
  // 			propsDate.getMonth() + 1 < 10
  // 					? `0${propsDate.getMonth() + 1}`
  // 					: propsDate.getMonth() + 1,
  // 	day:
  // 			propsDate.getDay() + 1 < 10
  // 					? `0${propsDate.getDay() + 1}`
  // 					: propsDate.getDay() + 1,
  // };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div className={classes.categoryBlock}>
          <div className={classes.categoryName}>{name}</div>
          <div className={classes.categoryIcon}>{icon}</div>
        </div>
      </TableCell>
      <TableCell>{description}</TableCell>
      {/*<TableCell>{`${fullDate.year}-${fullDate.month}-${fullDate.day}`}</TableCell>*/}

      <TableCell>{date.toLocaleDateString()}</TableCell>
      <TableCell>{money}</TableCell>
      <TableCell>
        <img src={`${avatar}`} alt="avatar" className={"avatar"} />
      </TableCell>
      <TableCell>
        <Button
          aria-controls="home-menu"
          aria-haspopup="true"
          // onClick={handleClick}
          onClick={handleActionClick}
          size="small"
        >
          <MoreVertIcon color="action" />
        </Button>
        <Menu
          id="home-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          // onClose={handleClose}>
          onClose={handleActionClose}
        >
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
            />
          )}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default HomeTable;
