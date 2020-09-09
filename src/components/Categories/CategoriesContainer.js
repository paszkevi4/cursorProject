import Categories from './Categories';
import { connect } from 'react-redux';
import { setIncomeCategoryAC } from '../../redux/incomeCategoriesReducer';
import {
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
    setIncomeCategory: (category) => {
      dispatch(setIncomeCategoryAC(category));
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
