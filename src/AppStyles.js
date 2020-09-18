import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop: '10px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#3f51b5',
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '100px',
  },
  mainLogo: {
    maxWidth: '50px',
  },
}));
