import Settings from './Settings';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    ...state.settings,
  };
};

export default connect(mapStateToProps, null)(Settings);
