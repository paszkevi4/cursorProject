import HomePage from './HomePage';
import { connect } from 'react-redux';
import { setNewChargeAC } from '../../redux/chargesReducer';
import { setNewIncomeAC } from '../../redux/incomesReducer';

let mapStateToProps = (state) => {
  return {
    incomes: state.incomes,
    charges: state.charges,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setIncome: (income) => {
      dispatch(setNewIncomeAC(income));
    },
    setCharge: (charge) => {
      dispatch(setNewChargeAC(charge));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
