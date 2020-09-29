import Categories from "./Categories";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    icons: state.icons,
    incomeCategories: state.incomeCategories,
    chargeCategories: state.chargeCategories,
  };
};

export default connect(mapStateToProps, null)(Categories);
