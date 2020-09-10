import HomePage from './HomePage';
import { connect } from 'react-redux';
import { createChargeAC, updateChargeAC, deleteChargeAC } from '../../redux/chargesReducer';
import { createIncomeAC, updateIncomeAC, deleteIncomeAC } from '../../redux/incomesReducer';

let mapStateToProps = (state) => {
  return {
    icons: state.icons,
    incomes: state.incomes,
    charges: state.charges,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createIncome: (income) => {
      dispatch(createIncomeAC(income));
    },
    updateIncome: (index, income) => {
      dispatch(updateIncomeAC(index, income));
    },
    deleteIncome: (index) => {
      dispatch(deleteIncomeAC(index));
    },
    createCharge: (charge) => {
      dispatch(createChargeAC(charge));
    },
    updateCharge: (index, charge) => {
      dispatch(updateChargeAC(index, charge));
    },
    deleteCharge: (index) => {
      dispatch(deleteChargeAC(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
