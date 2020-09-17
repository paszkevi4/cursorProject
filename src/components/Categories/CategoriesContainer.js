import Categories from './Categories';
import { connect } from 'react-redux';
import {
  fetchIncomeCategoriesAC,
  createIncomeCategoryAC,
  updateIncomeCategoryAC,
  deleteIncomeCategoryAC,
} from '../../redux/incomeCategoriesReducer';
import {
  fetchChargeCategoriesAC,
  createChargeCategoryAC,
  updateChargeCategoryAC,
  deleteChargeCategoryAC,
} from '../../redux/chargeCategoriesReducer';

let mapStateToProps = (state) => {
  return {
    icons: state.icons,
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchChargeCategories: (category) => {
      dispatch(fetchChargeCategoriesAC(category));
    },
    createIncomeCategory: (category) => {
      dispatch(createIncomeCategoryAC(category));
    },
    updateIncomeCategory: (index, category) => {
      dispatch(updateIncomeCategoryAC(index, category));
    },
    deleteIncomeCategory: (index) => {
      dispatch(deleteIncomeCategoryAC(index));
    },
    fetchIncomeCategories: (category) => {
      dispatch(fetchIncomeCategoriesAC(category));
    },
    createChargeCategory: (category) => {
      dispatch(createChargeCategoryAC(category));
    },
    updateChargeCategory: (index, category) => {
      dispatch(updateChargeCategoryAC(index, category));
    },
    deleteChargeCategory: (index) => {
      dispatch(deleteChargeCategoryAC(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
