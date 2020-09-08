import Charts from './Charts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    incomes: state.incomes,
    charges: state.charges,
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
