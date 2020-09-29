import Header from './Header';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    settings: state.settings,
    incomes: state.incomes,
    charges: state.charges,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
