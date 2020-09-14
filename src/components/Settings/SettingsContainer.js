import Settings from './Settings';
import { connect } from 'react-redux';
import { updateUserAC } from '../../redux/settingsReducer';

let mapStateToProps = (state) => {
  return {
    ...state.settings,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (newUser) => {
      dispatch(updateUserAC(newUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
