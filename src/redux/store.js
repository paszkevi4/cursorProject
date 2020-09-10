import { createStore, combineReducers } from 'redux';

import incomeCategoriesReducer from './incomeCategoriesReducer';
import chargeCategoriesReducer from './chargeCategoriesReducer';
import chargesReducer from './chargesReducer';
import incomesReducer from './incomesReducer';

import iconsReducer from './iconsReducer';
import settingsReducer from './settingsReducer';

let reducers = combineReducers({
  icons: iconsReducer,
  settings: settingsReducer,
  incomes: incomesReducer,
  charges: chargesReducer,
  incomeCategories: incomeCategoriesReducer,
  chargeCategories: chargeCategoriesReducer,
});

let store = createStore(reducers);

export default store;
