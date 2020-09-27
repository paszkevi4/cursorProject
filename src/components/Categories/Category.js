import React, { useState } from "react";

import AddCategory from "./AddCategory";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@material-ui/core/";
import { CategoryStyles } from "../Styles";

const useStyles = makeStyles(CategoryStyles);

const Category = ({
  name,
  description,
  date,
  icon,
  deleteCategory,
  updateCategory,
  icons,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const propsDate = new Date(date?.seconds * 1000);

  const fullDate = {
    year: propsDate.getFullYear(),
    month:
      propsDate.getMonth() + 1 < 10
        ? `0${propsDate.getMonth() + 1}`
        : propsDate.getMonth() + 1,
    day:
      propsDate.getDate() < 10
        ? `0${propsDate.getDate()}`
        : propsDate.getDate(),
  };

  const [currentCategory, setCurrentCategory] = useState({
    currentName: name,
    currentDescription: description,
    currentIcon: icon,
    currentDate: null,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleActionClose = (e) => {
    if (e.target.innerText === "Delete") {
      deleteCategory();
    } else if (e.target.innerText === "Edit") {
      setOpen(true);
      setCurrentCategory({
        currentName: name,
        currentDescription: description,
        currentIcon: icon,
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
          {open && (
            <AddCategory
              open={open}
              handleClose={handleClose}
              icons={icons}
              currentCategory={currentCategory}
              updateCategory={updateCategory}
            />
          )}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default Category;
