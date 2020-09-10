import React from "react";
import HomeTable from "./HomeTable";
import HomeSelect from "./HomeSelect";

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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme)=>({
	table: {
		minWidth: 650,
	},
	tableHead: {
		backgroundColor: 'lightcyan',
	},
	addButton: {
		float: 'right',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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
	}
}));

const Incomes = ({ props }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
			<div>
					<div className={classes.homeMenu}>
						<div className={classes.homeSelect}>
							<h3 className={classes.homeMenuTitle}>My Incomes</h3>
							<HomeSelect/>
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

				<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Transition modal</h2>
							<p id="transition-modal-description">react-transition-group animates me.</p>
						</div>
					</Fade>
				</Modal>

				<TableContainer component={Paper}>
					<Table className={classes.table}  aria-label="Table of Incomes">
						<TableHead className={classes.tableHead}>
							<TableRow>
								<TableCell>Category</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Date</TableCell>
								<TableCell>Money</TableCell>
								<TableCell>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
						{[
						...props.map((el, i) => (
								<HomeTable
										name={el.category}
										description={el.description}
										date={el.date}
										money={el.money}
										key={i}
									/>
							)),
						]}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Incomes;