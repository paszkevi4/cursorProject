import React, { useState } from "react";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@material-ui/core/";

const useStyles = makeStyles({
  categoryNameBlock: {
    display: "flex",
    alignItems: "center",
  },
  categoryIcon: {
    display: "flex",
    marginRight: "10px",
    color: "grey",
  },
  categoryName: {
    display: "flex",
  },
});

const Category = ({ name, description, date, icon }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.target.closest("table"));
  };

  const handleClose = (e) => {
    console.log(e.currentTarget);
    if (e.target.innerText === "Delete") {
      console.log(e.target.parentNode.parentNode.parentNode);
      // console.log(ReactDOM.findDOMNode(this))
    }
    setAnchorEl(null);
  };

  const propsDate = new Date(date);

  const fullDate = {
    year: propsDate.getFullYear(),
    month:
      propsDate.getMonth() + 1 < 10
        ? `0${propsDate.getMonth() + 1}`
        : propsDate.getMonth() + 1,
    day:
      propsDate.getDay() + 1 < 10
        ? `0${propsDate.getDay() + 1}`
        : propsDate.getDay() + 1,
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
      <TableCell>{`${fullDate.year}-${fullDate.month}-${fullDate.day}`}</TableCell>
      <TableCell>
        <Button
          aria-controls="category-menu"
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
        >
          <MoreVertIcon color="action" />
        </Button>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default Category;
