import { db } from './firebase/firebase';

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
const TOGGLE_WARNING = 'TOGGLE_WARNING';
const SET_MONEY_LIMIT = 'SET_LIMIT';

type stateType = {
  avatar: any;
  userName: string | null;
  phoneNumber: any;
  showWarning: boolean;
  moneyLimit: number;
  percentLimit?: number;
};

type updateUserACType = {
  type: typeof UPDATE_USER;
  newUser: stateType;
};

// type updateUserNameACType = {
//   type: typeof UPDATE_USER_NAME;
//   newUserName: string;
// };

// type updatePhoneNumberACType = {
//   type: typeof UPDATE_PHONE_NUMBER;
//   newPhoneNumber: any;
// };

// type toggleWarningACType = {
//   type: typeof TOGGLE_WARNING;
//   showWarning: boolean;
// };

// type setLimitACType = {
//   type: typeof SET_MONEY_LIMIT;
//   newLimit: number;
// };

// type actionType =
//   | updateUserACType
//   | updateUserNameACType
//   | updatePhoneNumberACType
//   | toggleWarningACType
//   | setLimitACType;

const initialState: stateType = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/527/527489.svg',
  userName: 'Ivan',
  phoneNumber: '+380991234567',
  showWarning: true,
  moneyLimit: 800,
  percentLimit: 40,
};

const settingsReducer = (state = initialState, action: updateUserACType): stateType => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...action.newUser };
    default:
      return state;
  }
};

export const updateUserAC = (newUser: stateType): updateUserACType => ({
  type: UPDATE_USER,
  newUser,
});

export const setSettingsThunk = () => {
  return (dispatch: any) => {
    db.collection('user-info').onSnapshot((ss: any) => {
      dispatch(updateUserAC(ss.docs[0].data()));
    });
  };
};

export default settingsReducer;
