import React from 'react';
import HomeTable from './HomeTable';

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
import HomeSelect from './HomeSelect';

const useStyles = makeStyles((theme) => ({
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
  },
}));

//---sort table-------
const useSortTableData = (items, config = null) => {

  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
//----end

const Charges = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //----sortСharges
  const { items, requestSort, sortConfig } = useSortTableData(props.charges);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  //---end

  return (
    <div>
      <div className={classes.homeMenu}>
        <div className={classes.homeSelect}>
          <h3 className={classes.homeMenuTitle}>My Charges</h3>
          <HomeSelect />
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
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Table of Incomes">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>
                <button
                  type="button"
                  onClick={() => requestSort('category')}
                  className={getClassNamesFor('category')}> Category
                </button>
              </TableCell>
              <TableCell>
                <button
                    type="button"
                    onClick={() => requestSort('description')}
                    className={getClassNamesFor('description')}> Description
                </button>
              </TableCell>
              <TableCell>
                <button
                    type="button"
                    onClick={() => requestSort('date')}
                    className={getClassNamesFor('date')}>  Date
                </button>
               </TableCell>
              <TableCell>
                <button
                    type="button"
                    onClick={() => requestSort('money')}
                    className={getClassNamesFor('money')}> Money
                </button>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...items.map((el, i) => (
                <HomeTable
                  icon={props.categories[el.category].icon}
                  name={props.categories[el.category].name}
                  description={el.description}
                  date={el.date.toString()}
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
export default Charges;
