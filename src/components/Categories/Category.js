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
import AddCategory from "./AddCategory";

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

const Category = ({
  name,
  description,
  date,
  icon,
  deleteCategory,
  index,
  icons,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const [currentCategory, setCurrentCategory] = useState({
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = (e) => {
    setAnchorEl(e.currentTarget);
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

  const handleActionClose = (e) => {
    if (e.target.innerText === "Delete") {
      deleteCategory(index);
    } else if (e.target.innerText === "Edit") {
      setOpen(true);
      setCurrentCategory({
        name: name,
        description: description,
        icon: icon,
        date: `${fullDate.year}-${fullDate.month}-${fullDate.day}`,
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
      <TableCell>{`${fullDate.year}-${fullDate.month}-${fullDate.day}`}</TableCell>
      <TableCell>
        <Button
          aria-controls="category-menu"
          aria-haspopup="true"
          onClick={handleActionClick}
          size="small"
        >
          <MoreVertIcon color="action" />
        </Button>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleActionClose}
        >
          <MenuItem onClick={handleActionClose}>Edit</MenuItem>
          <MenuItem onClick={handleActionClose}>Delete</MenuItem>
          <AddCategory
            open={open}
            handleClose={handleClose}
            icons={icons}
            currentCategory={currentCategory}
          />
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default Category;
