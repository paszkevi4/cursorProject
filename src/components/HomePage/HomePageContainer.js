import HomePage from "./HomePage";
import { connect } from "react-redux";

import {
  createChargeAC,
  updateChargeAC,
  deleteChargeAC,
  sortChargesAC,
} from "../../redux/chargesReducer";

import {
  createIncomeAC,
  updateIncomeAC,
  deleteIncomeAC,
  sortIncomesAC,
} from "../../redux/incomesReducer";


let mapStateToProps = (state) => {
  return {
    icons: state.icons,
    avatar: state.settings.avatar,
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
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
    sortCharges: (sortingBy, wasSorted) => {
      dispatch(sortChargesAC(sortingBy, wasSorted));
    },
    sortIncomes: (sortingBy, wasSorted) => {
      dispatch(sortIncomesAC(sortingBy, wasSorted));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
