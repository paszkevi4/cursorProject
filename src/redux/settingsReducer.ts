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

type updateUserNameACType = {
  type: typeof UPDATE_USER_NAME;
  newUserName: string;
};

type updatePhoneNumberACType = {
  type: typeof UPDATE_PHONE_NUMBER;
  newPhoneNumber: any;
};

type toggleWarningACType = {
  type: typeof TOGGLE_WARNING;
  showWarning: boolean;
};

type setLimitACType = {
  type: typeof SET_MONEY_LIMIT;
  newLimit: number;
};

type actionType =
  | updateUserACType
  | updateUserNameACType
  | updatePhoneNumberACType
  | toggleWarningACType
  | setLimitACType;

const initialState: stateType = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/527/527489.svg",
  userName: 'Ivan',
  phoneNumber: '+380991234567',
  showWarning: true,
  moneyLimit: 800,
  percentLimit: 40,
};

const settingsReducer = (state = initialState, action: actionType): stateType => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...action.newUser };
    case UPDATE_USER_NAME:
      return { ...state, userName: action.newUserName };
    case UPDATE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.newPhoneNumber };
    case TOGGLE_WARNING:
      return { ...state, showWarning: action.showWarning };
    case SET_MONEY_LIMIT:
      return { ...state, moneyLimit: action.newLimit };
    default:
      return state;
  }
};

export const updateUserAC = (newUser: stateType): updateUserACType => ({
  type: UPDATE_USER,
  newUser,
});

export const updateUserNameAC = (newUserName: string): updateUserNameACType => ({
  type: UPDATE_USER_NAME,
  newUserName,
});

export const updatePhoneNumberAC = (newPhoneNumber: any): updatePhoneNumberACType => ({
  type: UPDATE_PHONE_NUMBER,
  newPhoneNumber,
});

export const toggleWarningAC = (showWarning = !initialState.showWarning): toggleWarningACType => ({
  type: TOGGLE_WARNING,
  showWarning,
});

export const setLimitACType = (newLimit: number): setLimitACType => ({
  type: SET_MONEY_LIMIT,
  newLimit,
});

export default settingsReducer;
