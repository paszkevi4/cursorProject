import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div className={classes.categoryNameBlock}>
          <div className={classes.categoryIcon}>{icon}</div>
          <div className={classes.categoryName}>{name}</div>
        </div>
      </TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{date}</TableCell>
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
