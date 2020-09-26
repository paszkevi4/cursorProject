import Categories from './Categories';
import { connect } from 'react-redux';

// import {
//   fetchIncomeCategoriesAC,
//   createIncomeCategoryAC,
//   updateIncomeCategoryAC,
//   deleteIncomeCategoryAC,
// } from '../../redux/incomeCategoriesReducer';
// import {
//   createChargeCategoryAC,
//   updateChargeCategoryAC,
//   deleteChargeCategoryAC,
// } from '../../redux/chargeCategoriesReducer';

import {
  createChargeCategory,
  updateChargeCategory,
  deleteChargeCategory,
} from '../../redux/firebase/chargeCategoriesFB';
import {
  createIncomeCategory,
  updateIncomeCategory,
  deleteIncomeCategory,
} from '../../redux/firebase/incomeCategoriesFB';

let mapStateToProps = (state) => {
  return {
    icons: state.icons,
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // createIncomeCategory: (category) => {
    //   dispatch(createIncomeCategoryAC(category));
    // },
    // updateIncomeCategory: (index, category) => {
    //   dispatch(updateIncomeCategoryAC(index, category));
    // },
    // deleteIncomeCategory: (index) => {
    //   dispatch(deleteIncomeCategoryAC(index));
    // },
    // createChargeCategory: (category) => {
    //   dispatch(createChargeCategoryAC(category));
    // // },
    // createChargeCategory: (category) => {
    //   dispatch(createChargeCategory(category));
    // },
    // updateChargeCategory: (index, category) => {
    //   dispatch(updateChargeCategoryAC(index, category));
    // },
    // deleteChargeCategory: (index) => {
    //   dispatch(deleteChargeCategoryAC(index));
    // },
  };
};

const crudToProps = {
  createChargeCategory,
  updateChargeCategory,
  deleteChargeCategory,
  createIncomeCategory,
  updateIncomeCategory,
  deleteIncomeCategory,
};

export default connect(mapStateToProps, crudToProps)(Categories);
