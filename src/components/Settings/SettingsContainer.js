import Settings from './Settings';
import { connect } from 'react-redux';
import { updateUserNameAC } from '../../redux/settingsReducer';

let mapStateToProps = (state) => {
  return {
    ...state.settings,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (newUserName) => {
      dispatch(updateUserNameAC(newUserName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
