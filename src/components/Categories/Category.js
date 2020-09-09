import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Category = ({ name, description, date, icon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {icon}
        {name}
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
