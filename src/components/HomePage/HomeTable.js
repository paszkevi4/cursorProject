import React from "react";
// import ReactDOM from 'react-dom'


import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
	categoryBlock:{
		// display: 'flex',
		alignItems: 'center'
	},
	categoryName:{
		display: 'flex',
	}
});

const HomeTable = ({ category, description, date, money }) => {

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		console.log(e.target.closest('th'))
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
					<div className={classes.categoryBlock}>
						<div className={classes.categoryName}>{category}</div>
					</div>
				</TableCell>
				<TableCell>{description}</TableCell>
				<TableCell>{date}</TableCell>
				<TableCell>{money}</TableCell>
				<TableCell>
					<Button
							aria-controls="home-menu"
							aria-haspopup="true"
							onClick={handleClick}
							size="small"
					>
						<MoreVertIcon color="action" />
					</Button>
					<Menu
							id="home-menu"
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

export default HomeTable;
