import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
