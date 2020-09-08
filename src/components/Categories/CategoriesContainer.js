import Categories from './Categories';
import { connect } from 'react-redux';
import { setIncomeCategoryAC } from '../../redux/incomeCategoriesReducer';
import { setChargeCategoryAC } from '../../redux/chargeCategoriesReducer';

let mapStateToProps = (state) => {
  return {
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setIncomeCategory: (category) => {
      dispatch(setIncomeCategoryAC(category));
    },
    setChargeCategory: (category) => {
      dispatch(setChargeCategoryAC(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
