import { setSettingsThunk } from './settingsReducer';
import { setChargeCategoriesThunk } from './chargeCategoriesReducer';
import { setIncomeCategoriesThunk } from './incomeCategoriesReducer';
import { setChargesThunk } from './chargesReducer';
import { fetchIncomesThunk } from './incomesReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

type setInitializedACType = {
  type: typeof SET_INITIALIZED;
};

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: setInitializedACType) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitializedAC = (): setInitializedACType => {
  return { type: SET_INITIALIZED };
};

export const initializeAppThunk = () => (dispatch: any) => {
  const settings = dispatch(setSettingsThunk());
  const charges = dispatch(setChargesThunk());
  const incomes = dispatch(fetchIncomesThunk());
  const chargeCats = dispatch(setChargeCategoriesThunk());
  const incomeCats = dispatch(setIncomeCategoriesThunk());
  Promise.all([settings, charges, incomes, chargeCats, incomeCats]).then(() => {
    dispatch(setInitializedAC());
  });
};

export default appReducer;
